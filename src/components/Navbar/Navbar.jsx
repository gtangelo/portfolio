import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Container } from 'styled-components/Container';
import './index.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleMenu = () => setMenuIcon((prevState) => !prevState);
  const closeMenu = () => setMenuIcon(false);
  console.log(menuIcon);

  return (
    <nav>
      <div className='icon'>
        <Link to='/'>
          <img src='/favicon.ico' alt='Gabriel Ting' />
        </Link>
        {menuIcon ? (
          <AiOutlineClose size='30px' className='menu' onClick={handleMenu} />
        ) : (
          <AiOutlineMenu size='30px' className='menu' onClick={handleMenu} />
        )}
      </div>
      <Link
        to='/about'
        className={menuIcon ? 'nav-link' : 'nav-link none'}
        onClick={closeMenu}
      >
        About
      </Link>
      <Link
        to='/project'
        className={menuIcon ? 'nav-link' : 'nav-link none'}
        onClick={closeMenu}
      >
        Projects
      </Link>
      <Link
        to='/blog'
        className={menuIcon ? 'nav-link' : 'nav-link none'}
        onClick={closeMenu}
      >
        Blog
      </Link>
      <Link
        to='/resume'
        className={menuIcon ? 'nav-link' : 'nav-link none'}
        onClick={closeMenu}
      >
        Resume
      </Link>
    </nav>
  );
};

export default Navbar;
