import React, { useState, useRef, useEffect } from 'react';
import { select, arc, pie, interpolate } from 'd3';
import ml5 from 'ml5';

import useResizeObserver from '../../components/useResizeObserver';
import useInterval from '../../components/useInterval';

import BackButton from '../../components/BackButton';
import Layout from '../../components/Layout';

import model from './model/model.json';

const GaugeChart = ({ data }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    const arcGenerator = arc()
      .innerRadius(75)
      .outerRadius(150);

    const pieGenerator = pie()
      .startAngle(-0.5 * Math.PI)
      .endAngle(0.5 * Math.PI)
      .sort(null);

    const instructions = pieGenerator(data);

    svg
      .selectAll('.slice')
      .data(instructions)
      .join('path')
      .attr('class', 'slice')
      .attr('fill', (instruction, index) => (index == 0 ? '#eee' : '#ffcc00'))
      .style(
        'transform',
        `translate(${dimensions.width * 0.5}px, ${dimensions.height}px)`
      )
      .transition()
      .attrTween('d', function(nextInstruction) {
        const interpolator = interpolate(this.lastInstruction, nextInstruction);
        this.lastInstruction = interpolator(1);
        return t => {
          return arcGenerator(interpolator(t));
        };
      });
  }, [data, dimensions]);

  return (
    <div ref={wrapperRef} className='dataviz-wrapper'>
      <svg ref={svgRef}></svg>
    </div>
  );
};

let classifier;

function GaugeChartProject() {
  const videoRef = useRef();
  const [gaugeData, setGaugeData] = useState([0.5, 0.5]);
  const [shouldClassify, setShouldClassify] = useState(false);

  useEffect(() => {
    classifier = ml5.imageClassifier(model, () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(stream => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        });
    });
  }, []);

  useInterval(() => {
    if (classifier && shouldClassify) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.log(error);
          return;
        }
        results.sort((a, b) => b.label.localeCompare(a.label));
        setGaugeData(results.map(entry => entry.confidence));
      });
    }
  }, 500);

  return (
    <Layout>
      <div className='project-wrapper'>
        <h1>Are You Here ?</h1>
        <GaugeChart data={gaugeData} />
        <button onClick={() => setShouldClassify(!shouldClassify)}>
          {shouldClassify ? 'Stop Classifying' : 'Start Classifying'}
        </button>
        <video ref={videoRef} width='300' height='300' />
        <BackButton />
      </div>
    </Layout>
  );
}

export default GaugeChartProject;
