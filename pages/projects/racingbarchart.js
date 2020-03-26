import { useState, useRef, useEffect } from 'react';
import { select, scaleBand, scaleLinear, max } from 'd3';
import useResizeObserver from '../../components/useResizeObserver';
import useInterval from '../../components/useInterval';

import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';

const getRandomIndex = data => Math.floor(Math.random() * data.length);

const RacingBarChart = ({ data }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    // sort data
    data.sort((a, b) => b.value - a.value);

    // define scales
    const yScale = scaleBand()
      .paddingInner(0.1)
      .domain(data.map((value, index) => index))
      .range([0, dimensions.height]);

    const xScale = scaleLinear()
      .domain([0, max(data, entry => entry.value)])
      .range([0, dimensions.width]);

    // draw the bars
    svg
      .selectAll('.bar')
      .data(data, (entry, index) => entry.name)
      .join(enter =>
        enter.append('rect').attr('y', (entry, index) => yScale(index))
      )
      .attr('fill', entry => entry.color)
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('height', yScale.bandwidth())
      .transition()
      .attr('width', entry => xScale(entry.value))
      .attr('y', (entry, index) => yScale(index));

    // draw labels
    svg
      .selectAll('.label')
      .data(data, (entry, index) => entry.name)
      .join(enter =>
        enter
          .append('text')
          .attr('y', (entry, index) => yScale(index) + yScale.bandwidth() * 0.7)
      )
      .text(entry => `🦄 ${entry.name} (${entry.value} meters)`)
      .attr('class', 'label')
      .attr('x', 10)
      .transition()
      .attr('y', (entry, index) => yScale(index) + yScale.bandwidth() * 0.7)
      .attr('font-weight', 'bold');
  }, [data, dimensions]);

  return (
    <div ref={wrapperRef} className='dataviz-wrapper'>
      <svg ref={svgRef}></svg>
    </div>
  );
};

function RacingBarChartProject() {
  const [iteration, setIteration] = useState(0);
  const [start, setStart] = useState(false);
  const [data, setData] = useState([
    {
      name: 'alpha',
      value: 10,
      color: '#f4efd3'
    },
    {
      name: 'beta',
      value: 15,
      color: '#cccccc'
    },
    {
      name: 'charlie',
      value: 20,
      color: '#c2b0c9'
    },
    {
      name: 'delta',
      value: 25,
      color: '#9656a1'
    },
    {
      name: 'echo',
      value: 30,
      color: '#fa697c'
    },
    {
      name: 'foxtrot',
      value: 35,
      color: '#fcc169'
    }
  ]);

  useInterval(() => {
    if (start) {
      const randomIndex = getRandomIndex(data);
      setData(
        data.map((entry, index) =>
          index === randomIndex
            ? {
                ...entry,
                value: entry.value + 10
              }
            : entry
        )
      );
      setIteration(iteration + 1);
    }
  }, 500);

  return (
    <Layout>
      <div className='project-wrapper'>
        <h1>Racing Bar Chart</h1>
        <RacingBarChart data={data} />
        <button onClick={() => setStart(!start)}>
          {start ? 'Stop the race !' : 'Start the race !'}
        </button>
        <p>Iteration: {iteration}</p>
        <BackButton />
      </div>
    </Layout>
  );
}

export default RacingBarChartProject;
