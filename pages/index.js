import Layout from '../components/Layout';
import Link from 'next/link';

import '../components/index.scss';

const IndexPage = () => {
  const projects = [
    {
      path: 'barchart',
      name: 'Bar Chart'
    },
    {
      path: 'breakingbad',
      name: 'Breaking Bad Characters'
    },
    {
      path: 'animatedtreechart',
      name: 'Animated Tree Chart'
    },
    {
      path: 'gaugechart',
      name: 'Gauge Chart'
    },
    {
      path: 'racingbarchart',
      name: 'Racing Bar Chart'
    },
    {
      path: 'geochart',
      name: 'Geo Chart'
    }
  ];
  return (
    <Layout>
      <section id='home'>
        <h1>Welcome to my Portfolio of Data Visualization Projects</h1>
        <div className='project-list'>
          <ul>
            {projects &&
              projects.map(project => (
                <li key={project.path}>
                  <Link href={`/projects/${project.path}`}>
                    <a title={project.name}>{project.name}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
