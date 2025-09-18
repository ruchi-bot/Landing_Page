import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="d-flex align-items-center text-white"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(rgba(0, 100, 0, 0.7), rgba(0, 100, 0, 0.7)), url('https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2') center/cover no-repeat",
      }}
    >
      <div className="container text-center">
        <h1 className="display-3 fw-bold mb-3">
          🌱 Welcome to Saini Pesticides
        </h1>
        <p className="lead mb-4">
          Your trusted partner for <strong>plant-based medicines</strong> and{" "}
          <strong>organic seeds</strong> — promoting sustainable farming for a healthier future.
        </p>
        <div>
          <a href="#features" className="btn btn-light btn-lg me-3 shadow">
            Explore Products
          </a>
          <a href="#contact" className="btn btn-outline-light btn-lg shadow">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
