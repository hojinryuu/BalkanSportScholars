import React from 'react';
import '../styles/about.css';

function About() {
  return (
    <section className="about">
      <div className="container-about">
        <div className="about-text">
          <h1>About Us</h1>
          <p>Balkan Sports Scholars is dedicated to helping talented athletes from<br />the Balkans
          find scholarships and pursue their academic and athletic<br />dreams in the United States.<br />
          <br />Our mission is to bridge the gap between potential and opportunity by<br /> providing the 
          support, resources, and guidance needed for success.<br />We are committed to empowering
          the next generation<br />of Balkan athletes both on the field and in the classroom.</p>            
          <a href="/about">Learn More</a>
        </div>
      </div>
      <img src="/img/about.jpg" alt="About Us image" />
    </section>
  );
}

export default About;
