import React from "react";
import { Link } from "react-scroll"

function Header() {
  return (
    <header className="fixed-header header">
      <div className="container-lg">
        <nav className="navbar navbar-expand-lg">
          <li className="navbar-brand navbar-nav active" aria-current="page" href="/">
            <Link
              style={{ textDecoration: 'none', color: '#000' }}
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
            >
              CC
            </Link>
          </li>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={100}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;