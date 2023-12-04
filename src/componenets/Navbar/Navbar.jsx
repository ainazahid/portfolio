import React from 'react'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-grid">
  <div className="containner-fluid d-flex">
  <a class="navbar-brand ms-3" href="/">
      <img src="./logo.avif"  class="rounded-circle" alt="" width="50" height="50"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">What I do</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Testimonial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
 
</nav>
    </div>
  )
}
