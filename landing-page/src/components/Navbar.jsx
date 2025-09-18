import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero">
          🌱 Saini Pesticides
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link to="hero" smooth={true} duration={600} className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="about" smooth={true} duration={600} className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="features" smooth={true} duration={600} className="nav-link">Products</Link></li>
            <li className="nav-item"><Link to="testimonials" smooth={true} duration={600} className="nav-link">Reviews</Link></li>
            <li className="nav-item"><Link to="contact" smooth={true} duration={600} className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
