import React from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  return (
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
            <span>balkansportscholars@gmail.com</span><br />
          </div>

          <div className="contact-icons">
            <i className="material-icons">phone</i>
            <span>+12523738698, +13472781736, +355698355522</span>
          </div>

          <div className="social">
            <div className="social-logo">
              <i id="social-icon" className="fab fa-facebook"></i>
              <a href="https://www.facebook.com/people/Balkan-Sport-Scholars/61551249830619/">
                <span>Balkan Sport Scholars</span>
              </a>
            </div><br />
            <div className="social-logo">
              <i id="social-icon" className="fab fa-instagram"></i>
              <a href="https://www.instagram.com/balkansportscholars/">
                <span>balkansportscholars</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
