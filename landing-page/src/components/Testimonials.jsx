import React from "react";

function Testimonials() {
  const reviews = [
    { name: "Rajesh Kumar", feedback: "The organic pesticides are highly effective and safe for my crops!" },
    { name: "Anita Verma", feedback: "Quality seeds with great germination rate. Totally satisfied!" },
    { name: "Vikram Singh", feedback: "Best store for sustainable farming products. Highly recommend." }
  ];

  return (
    <section id="testimonials" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">What Our Customers Say</h2>
        <div className="row">
          {reviews.map((r, idx) => (
            <div key={idx} className="col-md-4 mb-3">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <p className="fst-italic">"{r.feedback}"</p>
                  <h6 className="fw-bold mt-3">{r.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
