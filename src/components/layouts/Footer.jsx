import React from "react";

function Footer() { 
  return ( 
    <footer className={"footer"}>
      <div className="container">
        <a href="https://linkedin.com/in/chris-condreay" className="ms-3" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#fff" }}>
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/chriscondreay" className="ms-3" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#fff" }}>
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer;