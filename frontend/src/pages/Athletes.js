import React from 'react';
import '../styles/Athletes.css';

// Import images
import player1Image from '../assets/img/player1.jpeg';
import player2Image from '../assets/img/player2.jpeg';
import player3Image from '../assets/img/player3.jpeg';

function Athletes() {
  return (
    <>
      <section className="intro container-intro">
        <div className="begin-intro">
          <h1>Our Athletes</h1>
        </div>
      </section>

      <section className="players">
        <div className="players-wrapper">
          <div className="player-cards">
            <div className="player-card">
              <img src={player1Image} alt="Xhoel Lutaj" />
              <div className="player-details">
                <h3>Xhoel Lutaj</h3>
                <p>Position: Midfield</p>
                <p>Age: 18</p>
                <p>Place of birth: Fier, Albania</p>
                <a href="https://www.instagram.com/xhoelutaj/">
                  <i id="social-icon" className="fab fa-instagram"></i>
                </a>    
              </div>
            </div>

            <div className="player-card">
              <img src={player2Image} alt="Ermal Ahmetaj" />
              <div className="player-details">
                <h3>Ermal Ahmetaj</h3>
                <p>Position: Goalkeeper</p>
                <p>Age: 19</p>
                <p>Place of birth: Tiranë, Albania</p>
                <a href="https://www.instagram.com/ermal.ahmetaj/">
                  <i id="social-icon" className="fab fa-instagram"></i>
                </a>        
              </div>
            </div>

            <div className="player-card">
              <img src={player3Image} alt="Franc Rabeta" />
              <div className="player-details">
                <h3>Franc Rabeta</h3>
                <p>Position: Attack</p>
                <p>Age: 19</p>
                <p>Place of birth: Tiranë, Albania</p>
                <a href="https://www.instagram.com/francrabeta/">
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

export default Athletes;