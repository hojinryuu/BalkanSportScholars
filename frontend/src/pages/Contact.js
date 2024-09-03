import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/Home.css';
import '../styles/ContactForm.css';

function Contact() {
  return (
    <>
        <section className="contact">
          <ContactForm />
        </section>
    </>
  );
}

export default Contact;
