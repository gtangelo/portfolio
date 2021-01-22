import React, { useState } from "react";
import { Link } from "gatsby";
import "./index.css";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleMenu = () => setMenuIcon(!menuIcon);
  const closeMenu = () => setMenuIcon(false);

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="/favicon.ico" alt="Gabriel Ting" width="60px"/>
        </Link>
      </div>
      <Link to="/" className="nav-link" onClick={closeMenu}>
        Home
      </Link>
      <Link to="/about" className="nav-link" onClick={closeMenu}>
        About
      </Link>
      <Link to="/project" className="nav-link" onClick={closeMenu}>
        Projects
      </Link>
      <Link to="/resume" className="nav-link" onClick={closeMenu}>
        Resume
      </Link>
      {/* <Link to="/blog" className="nav-link" onClick={closeMenu}>
        Blog
      </Link> */}
    </nav>
  );
};

export default Navbar;
