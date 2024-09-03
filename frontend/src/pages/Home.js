import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/Home.css';

// Import images
import aboutImage from '../assets/img/about.jpg';
import signing1Image from '../assets/img/signing1.jpg';
import signing2Image from '../assets/img/signing2.jpg';

function Home() {
  return (
    <>
      <main>
        <div className="hero container-hero">
          <div className="hero-intro">
            <h1>Unlock Scholarship<br />Opportunities for<br />Your Athletic Future</h1>
            <p>Discover and apply for scholarship opportunities at top U.S. colleges<br />
              and universities, tailored specifically for international athletes</p>
            <a href="/services">Get Started</a>
          </div>
          <div className="hero-intro-side">
            <p>From application assistance to visa<br />guidance, we support you at every step of your journey</p>
            <p>We streamline the complex scholarship application<br />process, making it easier and less stressful for you</p>
            <p>Benefit from our guidance on adapting to American<br />culture and improving language skills</p>
          </div>
        </div>
      </main>

      <section className="about">
          <div className="container-about">
            <div className="about-text">
              <h1>About Us</h1>
              <p>Balkan Sport Scholars is dedicated to helping talented athletes from<br />the Balkans
                find scholarships and pursue their academic and athletic<br />dreams in the United States.<br />
                <br />Our mission is to bridge the gap between potential and opportunity by<br /> providing the
                support, resources, and guidance needed for success.<br />We are committed to empowering
                the next generation<br />of Balkan athletes both on the field and in the classroom.</p>
              <a href="/about">Learn More</a>
            </div>
            <img src={aboutImage} alt="About Us image" />
          </div>
        </section>

        <section className="our-services">
          <div className="our-services-wrapper">
            <h1>Our Services</h1>
            <div className="our-services-cards">
              <div className="our-services-card">
                <i className="fa-sharp fa-solid fa-file-invoice"></i>
                <h2>Application Assistance</h2>
                <p>We provide thorough support for preparing and submitting your application materials.
                  Our team ensures all documents are accurate and complete, helping you navigate the
                  process smoothly and meet all deadlines required for success.</p>
              </div>

              <div className="our-services-card">
                <i className="fa-solid fa-passport"></i>
                <h2>Visa Guidance</h2>
                <p> Our visa experts offer detailed assistance throughout the entire application process.
                  We help gather necessary documents, prepare for interviews, and navigate complex
                  regulations to increase your chances of obtaining the required visa.</p>
              </div>

              <div className="our-services-card">
                <i className="fa-solid fa-people-group"></i>
                <h2>Cultural Orientation</h2>
                <p> We offer in-depth cultural orientation to ease your transition into a new environment.
                  Our sessions cover local customs, traditions, and essential practices, ensuring you
                  feel confident and prepared for your new life abroad.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="signings">
          <div className="signings-wrapper">
            <h1>Recent Signings</h1>
            <div className="signing-cards">
              <div className="signing-card">
                <img src={signing1Image} alt="Xhoel Lutaj Signed" />
              </div>
              <div className="signing-card">
                <img src={signing2Image} alt="Franc Rabeta Signed" />
              </div>
            </div>
            <a href="/athletes">View Our Athletes</a>
          </div>
        </section>

        <section className="contact">
          <ContactForm />
        </section>
    </>
  );
}

export default Home;
