import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/img/logo.png';

function Navbar() {
  const toggleMenu = () => {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('active');
  };

  return (
    <header>
      <div className="navbar container-nav">
        <div className="navbar-logo">
          <img src={logo} alt="BalkanSportsScholars logo" />
          <h1>BalkanSportScholars</h1>
        </div>

        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/athletes">Athletes</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;