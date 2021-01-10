import React, { useState } from "react"
import { Link } from "gatsby"
import "./index.css"
import { NavbarContainer } from "styled-components/Container"

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false)

  const handleMenu = () => setMenuIcon(!menuIcon)
  const closeMenu = () => setMenuIcon(false)

  return (
    <NavbarContainer>
      <div className="logo">
        <Link to="/">
          <svg
            className="svg-logo"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="#318DDA" />
            <circle cx="25" cy="25" r="23.45" fill="#000E44" />
            <ellipse
              cx="29.225"
              cy="25.775"
              rx="14.575"
              ry="14.575"
              fill="white"
            />
            <ellipse
              cx="29.225"
              cy="25.8"
              rx="12.225"
              ry="12.25"
              fill="#000E44"
            />
            <rect y="26.65" width="42.55" height="1.55" fill="white" />
            <rect
              x="26.8"
              y="19.2"
              width="18.65"
              height="7.45"
              fill="#000E44"
            />
          </svg>
        </Link>
      </div>
      <li className="nav-item">
        <Link to="/about" className="nav-link" onClick={closeMenu}>
          <li>About</li>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/project" className="nav-link" onClick={closeMenu}>
          <li>Projects</li>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/resume" className="nav-link" onClick={closeMenu}>
          <li>Resume</li>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/blog" className="nav-link" onClick={closeMenu}>
          <li>Blog</li>
        </Link>
      </li>
    </NavbarContainer>
  )
}

export default Navbar
