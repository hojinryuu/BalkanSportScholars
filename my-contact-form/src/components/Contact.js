import React from 'react';
import '../styles/contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="container-contact">
        <h1>Contact Us</h1>
        <div className="contact-temp">
          <div className="contact-form">
            <form>
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
              <textarea name="message" placeholder="Message"></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="contact-info">
            <h1>Contact Information</h1>
            <div className="contact-icons">
              <i className="material-icons">email</i>
              <span>balkansportscholars@gmail.com</span>
            </div>
            <div className="contact-icons">
              <i className="material-icons">phone</i>
              <span>+12523738698, +13472781736, +355698355522</span>
            </div>
            <div className="social">
              <div className="social-logo">
                <i id="social-icon" className="fab fa-facebook"></i>
                <span>Balkan Sport Scholars</span>
              </div>
              <div className="social-logo">
                <i id="social-icon" className="fab fa-instagram"></i>
                <span>balkansportscholars</span>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
