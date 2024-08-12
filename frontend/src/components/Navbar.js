import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <header>
      <div className="navbar container-nav">
        <div className="navbar-logo">
          <img src="img/logo.png" alt="BalkanSportsScholars logo" />
          <h1>BalkanSportsScholars</h1>
        </div>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Athletes</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
