import { useState, useRef, useEffect } from 'react';
import { select, min, max, scaleTime, scaleLinear, axisBottom } from 'd3';
import useResizeObserver from '../../components/useResizeObserver';

import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';

const getDate = dateString => {
  const date = dateString.split('-');
  return new Date(date[2], date[0] - 1, date[1]);
};

const BBTime = ({ data, highlight }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    const minDate = min(data, episode => getDate(episode.air_date));
    const maxDate = max(data, episode => getDate(episode.air_date));

    const xScale = scaleTime()
      .domain([minDate, maxDate])
      .range([0, dimensions.width]);

    const yScale = scaleLinear()
      .domain([max(data, episode => episode.characters.length), 0])
      .range([0, dimensions.height]);

    svg
      .selectAll('.episode')
      .data(data)
      .join('line')
      .attr('class', 'episode')
      .attr('stroke', episode =>
        episode.characters.includes(highlight) ? 'green' : 'black'
      )
      .attr('x1', episode => xScale(getDate(episode.air_date)))
      .attr('x2', episode => xScale(getDate(episode.air_date)))
      .attr('y1', dimensions.height)
      .attr('y2', episode => yScale(episode.characters.length));

    const xAxis = axisBottom(xScale);
    svg
      .select('.x-axis')
      .style('transform', `translateY(${dimensions.height}px)`)
      .call(xAxis);
  }, [data, dimensions, highlight]);

  return (
    <div ref={wrapperRef} className='dataviz-wrapper'>
      <svg ref={svgRef}>
        <g className='x-axis' />
      </svg>
    </div>
  );
};

function BreakingBadProject() {
  const [bbEpisodes, setBbEpisodes] = useState([]);
  const [bbCharacters, setBbCharacters] = useState([]);
  const [highlight, setHighlight] = useState();

  useEffect(() => {
    fetch('https://breakingbadapi.com/api/characters?category=Breaking+Bad')
      .then(response => response.ok && response.json())
      .then(characters => {
        console.log(characters);
        setBbCharacters(characters);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetch('https://breakingbadapi.com/api/episodes?series=Breaking+Bad')
      .then(response => response.ok && response.json())
      .then(episodes => {
        setBbEpisodes(episodes);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout>
      <div className='project-wrapper'>
        <h2>Breaking Bad Timeline</h2>
        <BBTime data={bbEpisodes} highlight={highlight} />
        <h3>Select a character</h3>
        <select value={highlight} onChange={e => setHighlight(e.target.value)}>
          <option disabled selected>
            Select a character
          </option>
          {bbCharacters
            ? bbCharacters.map(character => (
                <option key={character.char_id}>{character.name}</option>
              ))
            : null}
        </select>
        <BackButton />
      </div>
    </Layout>
  );
}

export default BreakingBadProject;
