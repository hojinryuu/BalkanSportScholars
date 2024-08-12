import React from 'react';
import '../styles/service.css';

function Services() {
  return (
    <section className="service">
      <div className="service-wrapper">
        <h1>Our Services</h1>
        <div className="cards">
          <div className="card">
            <i className="fa-sharp fa-solid fa-file-invoice"></i>
            <h2>Application Assistance</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In laborum expedita, sed provident dolores qui? Consectetur neque
            molestias minima, ex impedit pariatur facere aspernatur deleniti optio, quos, sint in provident?</p>
          </div>
          <div className="card">
            <i className="fa-solid fa-passport"></i>
            <h2>Visa Guidance</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In laborum expedita, sed provident dolores qui? Consectetur neque
            molestias minima, ex impedit pariatur facere aspernatur deleniti optio, quos, sint in provident?</p>
          </div>
          <div className="card">
            <i className="fa-solid fa-people-group"></i>
            <h2>Cultural Orientation</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In laborum expedita, sed provident dolores qui? Consectetur neque
            molestias minima, ex impedit pariatur facere aspernatur deleniti optio, quos, sint in provident?</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
