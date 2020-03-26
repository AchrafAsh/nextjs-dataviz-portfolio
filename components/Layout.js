import React from 'react';
import Link from 'next/link';

import './layout.scss';

const Layout = ({ children }) => {
  const links = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/about',
      name: 'About'
    }
  ];
  return (
    <>
      <nav>
        <ul>
          {links &&
            links.map(link => (
              <Link key={link.path} href={link.path}>
                <a>{link.name}</a>
              </Link>
            ))}
        </ul>
      </nav>
      <main>{children}</main>
      <footer>Built with 🔥 by Achraf ASH</footer>
    </>
  );
};

export default Layout;
