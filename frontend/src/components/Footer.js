import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer>
        <div className="container-footer">
          <div className="footer-logo">
            <img src={logo} alt="BalkanSportsScholars logo" />
            <h1>BalkanSportsScholars</h1>
          </div>

          <div className="footer-heading">
            <h2>Browse</h2>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/athletes">Athletes</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-heading">
            <h2>Services</h2>
            <a href="/services#the-process">Application Assistance</a>
            <a href="/services#the-process">Visa Guidance</a>
            <a href="/services#the-process">Cultural Orientation</a>
          </div>

          <div className="footer-heading">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/balkansportscholars/">Instagram</a>
            <a href="https://www.facebook.com/people/Balkan-Sport-Scholars/61551249830619/">Facebook</a>
          </div>
        </div>
      </footer>

      <section className="copyright">
        <div className="copyright-container">
          <p>&copy; Copyright 2024</p>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </section>
    </>
  );
}

export default Footer;
