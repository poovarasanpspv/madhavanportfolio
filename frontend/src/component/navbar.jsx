import React from 'react'

function Navbar() {
  return (
    <div className='main-navbar-top  bg-dark'>
      <nav className="navbar navbar-expand-lg container">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#aboutid">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#project-list">Projects</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#experienceid">Experience</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#educationid">Education</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contactid">Contact</a>
            </li>
            </ul>      
        </div>
        </nav>
    </div>
  )
}

export default Navbar
