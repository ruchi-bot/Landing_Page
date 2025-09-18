import React from "react";

function Footer() {
  return (
    <footer className="bg-success text-white text-center py-4">
      <div className="container">
        <h5 className="fw-bold">🌱 Saini Pesticides</h5>
        <p className="mb-2">
          Providing eco-friendly, plant-based solutions for healthier crops and a sustainable future.
        </p>

        <div className="mb-3">
          <a href="#hero" className="text-white me-3 text-decoration-none">Home</a>
          <a href="#about" className="text-white me-3 text-decoration-none">About</a>
          <a href="#features" className="text-white me-3 text-decoration-none">Products</a>
          <a href="#contact" className="text-white text-decoration-none">Contact</a>
        </div>

        <div className="mb-3">
          <a href="https://facebook.com" className="text-white me-3">
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a href="https://instagram.com" className="text-white me-3">
            <i className="bi bi-instagram fs-4"></i>
          </a>
          <a href="https://twitter.com" className="text-white">
            <i className="bi bi-twitter fs-4"></i>
          </a>
        </div>

        <p className="mb-0">© {new Date().getFullYear()} Saini Pesticides. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
