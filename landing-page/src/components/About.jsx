import React from "react";

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Side */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://i.pinimg.com/736x/8f/df/6b/8fdf6b50d3fd947ee65ffe2d6014dbbb.jpg"
              alt="About Saini Pesticides"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          {/* Text Side */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">About Us</h2>
            <p className="text-muted">
              At <strong>Saini Pesticides</strong>, we are committed to supporting
              farmers with eco-friendly solutions. Our range of{" "}
              <span className="fw-semibold">organic seeds</span> and{" "}
              <span className="fw-semibold">plant-based medicines</span> helps
              increase productivity while protecting the environment.
            </p>
            <p className="text-muted">
              With years of expertise in agriculture, our goal is to make farming{" "}
              <span className="fw-semibold">healthier, sustainable, and profitable</span>.
            </p>
            <a href="#features" className="btn btn-success btn-lg shadow mt-3">
              Discover Our Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
