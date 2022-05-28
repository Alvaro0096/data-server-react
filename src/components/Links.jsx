import React from 'react';
import { Link } from 'react-router-dom';
import { linksItems } from './LinksItems';
import '../styles/Links.css';

const Links = () => {
  return (
    <>
        <nav className='navbar'>
          <ul className='ul-nav'>
            {linksItems.map(item => {
              return(
                <li key={item.id} className={item.linkName}>
                  <Link to={item.path}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  )
}

export default Links