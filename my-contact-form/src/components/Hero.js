import React from 'react';
import '../styles/hero.css';

function Hero() {
  return (
    <div className="hero container-hero">
      <div className="hero-intro">
        <h1>Unlock Scholarship<br />Opportunities for<br />Your Athletic Future</h1>
        <p>Discover and apply for scholarship opportunities at top U.S. colleges<br />
          and universities, tailored specifically for international athletes</p> 
        <a href="#">Get Started</a>
      </div>
      <div className="hero-intro-side">
        <p>From application assistance to visa<br />guidance, we support you at every step of your journey</p>
        <p>We streamline the complex scholarship application<br />process, making it easier and less stressful for you</p>
        <p>Benefit from our guidance on adapting to American<br />culture and improving language skills</p>
      </div>
    </div>
  );
}

export default Hero;