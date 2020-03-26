import React from 'react';
import Link from 'next/link';

import './backbtn.scss';

export default () => (
  <Link href='/'>
    <a className='back-btn' title='Back to the project list'>
      {'<'} Back to project list
    </a>
  </Link>
);
