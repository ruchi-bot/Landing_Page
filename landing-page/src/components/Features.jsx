import React from "react";

function Features() {
  const products = [
    { icon: "bi-bug", title: "Organic Pesticides", desc: "Eco-friendly solutions to protect crops from pests." },
    { icon: "bi-flower3", title: "Quality Seeds", desc: "High-yield seeds for sustainable farming." },
    { icon: "bi-droplet", title: "Plant Medicines", desc: "Herbal treatments for healthier plants." }
  ];

  return (
    <section id="features" className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Our Products</h2>
        <div className="row">
          {products.map((p, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <i className={`bi ${p.icon} display-4 text-success mb-3`}></i>
                  <h5 className="fw-bold">{p.title}</h5>
                  <p className="text-muted">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
