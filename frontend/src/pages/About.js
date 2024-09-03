import React from 'react';
import '../styles/About.css';

// Import images
import missionImage from '../assets/img/mission-img.png';
import whyUsImage from '../assets/img/why-us.jpg';
import endiRahmaniImage from '../assets/img/endi_rahmani.jpg';
import sokolYmerajImage from '../assets/img/sokol_ymeraj.jpg';

function About() {
  return (
    <>
      <section className="about-intro">
        <div className="about-begin-intro">
          <h1>About Us</h1>
        </div>
      </section>

      <section className="mission">
        <div className="container-mission">
          <div className="mission-text">
            <h1>Our Mission</h1>
            <p>
              At BalkanSportScholars, our mission is to pave the path for<br />
              talented athletes to secure athletic scholarships that enable them<br />
              to pursue their sports and education simultaneously at prestigious<br />
              universities and colleges in the United States.
            </p>
          </div>
        </div>
        <img src={missionImage} alt="mission image" />
      </section>

      <section className="why-us">
        <div className="container-why">
          <div className="why-text">
            <h1>Why Us?</h1>
            <p>
              At BalkanSportScholars, we are a team of current and former 
              student-athletes who have walked the very path we now guide 
              others along. Our founders come from the Balkan region and
              having excelled at the collegiate level in the United States.<br />
              <br />
              We understand the challenges of playing overseas and have
              embraced the opportunities, thriving both athletically and
              academically. Our mission is to share this knowledge and support 
              with the next generation of Balkan athletes.
            </p>
          </div>
          <div className="why-img">
            <img src={whyUsImage} alt="why-us image" />
          </div>
        </div>
      </section>

      <section className="meet-us">
        <div className="container-meet-us">
          <h1>Meet The Team</h1>
          <div className="team-cards">
            <div className="team-card">
              <img src={endiRahmaniImage} alt="Endi Rahmani" />
              <div className="card-content">
                <h2>Endi Rahmani</h2>
                <p>
                  Endi Rahmani is a standout scholar-athlete with a remarkable soccer career at Barton College and FK Partizani in Albania. 
                  Currently pursuing a degree in Business Administration, he also excels as a Student Ambassador and Orientation Leader.
                </p>
                <a href="https://www.instagram.com/endi_rahmani/">
                  <i id="social-icon" className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="team-card">
              <img src={sokolYmerajImage} alt="Sokol Ymeraj" />
              <div className="card-content">
                <h2>Sokol Ymeraj</h2>
                <p>
                  Sokol Ymeraj is a distinguished scholar-athlete, recognized as the Northeast Conference NCAA D1 Student-Athlete of the Year.
                  He captained the St. Francis College Men’s Soccer Team and led Albania’s national teams in prestigious Euro Cup qualifiers.
                </p>
                <a href="https://www.instagram.com/sokolymeraj13/">
                  <i id="social-icon" className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;