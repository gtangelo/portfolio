import React, { useState } from "react"
import { Link } from "gatsby"
import "./index.css"

import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import { Container } from "@material-ui/core"
import { logo } from "logo-transparent.jpg"

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false)

  const handleMenu = () => setMenuIcon(!menuIcon)
  const closeMenu = () => setMenuIcon(false)

  return (
    <nav className="navbar-container">
      <div>
        <header>
          <Link to='/' className="logo">
            {logo}
          </Link>
          <div className="menu-container" onClick={handleMenu}>
            {menuIcon ? <CloseIcon /> : <MenuIcon />}
          </div>
          <ul
            className={
              menuIcon
                ? "navbar-links-container active"
                : "navbar-links-container"
            }
          >
            <li className="nav-item">
              <Link to='/about' className="nav-link" onClick={closeMenu}>
                <li>About</li>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to='/project'
                className="nav-link"
                onClick={closeMenu}
              >
                <li>Projects</li>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/resume' className="nav-link" onClick={closeMenu}>
                <li>Resume</li>
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </nav>
  )
}

export default Navbar
