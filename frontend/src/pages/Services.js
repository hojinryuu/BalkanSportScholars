import React from 'react';
import '../styles/Services.css';
import '../components/UniversityLife';

import servicesVideo from '../assets/videos/services.mp4';
import UniversityLife from '../components/UniversityLife';

function Services() {
  return (
    <>
      <section className="services-home">
        <div className="video-background">
          <video autoPlay muted loop playsInline>
            <source src={servicesVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="service" id="the-process">
        <div className="service-wrapper">
          <h1>The Process</h1>
          <div className="service-cards">
            <div className="service-card">
              <i className="fas fa-comments"></i>
              <h2>Initial Consultation</h2>
              <p>We begin with a personalized consultation where athletes share their academic and athletic backgrounds, goals, and aspirations. This step helps us understand your unique needs and assess your potential for securing scholarships in the U.S. It's the foundation of our tailored approach, ensuring we provide the right guidance from the start.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-clipboard-check"></i>
              <h2>Profile Assessment</h2>
              <p>Our experts thoroughly review your academic records, athletic achievements, and personal goals. We may request additional documents or video footage to get a complete picture. This assessment allows us to determine the best strategies for presenting your strengths to potential schools.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-map"></i>
              <h2>Tailored Plan</h2>
              <p>Based on our assessment, we craft a customized action plan outlining the best-fit schools, required documentation, and timelines. This plan provides a clear roadmap, helping you navigate the complex scholarship process with confidence and clarity.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-file-alt"></i>
              <h2>Application Prep</h2>
              <p>We guide you through preparing and compiling all necessary application materials, including transcripts, portfolios, recommendation letters, and personal statements. Our goal is to create a strong, professional application that highlights your strengths and sets you apart from the competition.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-envelope-open-text"></i>
              <h2>School Outreach</h2>
              <p>We actively reach out to targeted schools on your behalf, presenting your profile and expressing your interest in their programs. Our connections and expertise help open doors, increasing your chances of securing a scholarship offer.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-microphone-alt"></i>
              <h2>Interview and Tryouts</h2>
              <p>Should interviews or tryouts be required, we provide comprehensive preparation, including mock interviews, tips, and logistics support. We ensure you’re fully prepared to showcase your talents and make a strong impression.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-check-circle"></i>
              <h2>Offer and Acceptance</h2>
              <p>When scholarship offers come in, we assist you in understanding the terms, comparing options, and making the best choice. We also help with the acceptance process and ensure all required paperwork is completed accurately.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-hands-helping"></i>
              <h2>Ongoing Support</h2>
              <p>Even after you've secured a scholarship, our support continues. We help with visa applications, travel arrangements, and provide cultural orientation to help you adjust to life in the U.S. Our goal is to ensure your success both academically and athletically.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-phone-alt"></i>
              <h2>Contact Us</h2>
              <p>Ready to take the next step in your athletic and academic journey? Reach out to us today to schedule your initial consultation and start your path to success. We're here to guide you every step of the way.</p>
              <a href="/contact">Contact Us</a>
            </div>
          </div>
        </div>
      </section>


      <section className="uni-life">
          <UniversityLife />
        </section>
    </>
  );
}

export default Services;
