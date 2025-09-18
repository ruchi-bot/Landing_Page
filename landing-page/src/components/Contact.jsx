import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Get in Touch</h2>
        <p className="text-center text-muted mb-5">
          Have questions about our plant-based medicines or seeds? Fill out the form below, and we’ll get back to you soon.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" rows="4" className="form-control" placeholder="Write your message here..." required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success btn-lg px-5">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
