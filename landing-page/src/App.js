
import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ErrorBoundary>
      <div>
        
        { <Navbar />}
        
        { <Hero /> }
        { <About /> }
        { <Features /> }
        { <Testimonials /> }
        { <Contact /> }
        {<Footer /> }
      </div>
    </ErrorBoundary>
  );
}

export default App;