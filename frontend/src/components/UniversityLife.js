import React, { useState } from 'react';
import '../styles/UniversityLife.css';

// Import images
import uniLifeFeatureImage from '../assets/img/uni-life-feature.jpg';
import vlogThumbnail from '../assets/img/vlog-thumbnail.jpg';
import njitThumbnail from '../assets/img/njit-thumbnail.jpg';
import pier5Thumbnail from '../assets/img/pier5-thumbnail.jpg';

// Import videos
import dailyVideo from '../assets/videos/daily.mp4';
import vlogVideo from '../assets/videos/vlog.mp4';
import njitVideo from '../assets/videos/njit.mp4';
import pier5Video from '../assets/videos/pier5.mp4';

function UniversityLife() {
  const [videoSrc, setVideoSrc] = useState(dailyVideo); // Ensure this is a valid video
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = (src) => {
    setVideoSrc(src);
    setIsPlaying(true);
  };

  const stopVideo = () => {
    setIsPlaying(false);
  };

  return (
    <section className="uni-life">
      <div className="container-uni-life">
        <h1>University Life</h1>
        <div className="uni-media">
          <div className="feature-img">
            <img src={uniLifeFeatureImage} alt="University Life Feature" />
            <i className="fas fa-play" onClick={() => playVideo(dailyVideo)}></i>
          </div>

          <div className="uni-col">
            <div className="small-img-row">
              <div className="small-img">
                <img src={vlogThumbnail} alt="Vlog Thumbnail" />
                <i className="fas fa-play" onClick={() => playVideo(vlogVideo)}></i>
              </div>
              <p>A day in the life of a College Soccer player<br />NCAA Quarterfinal</p>
            </div>

            <div className="small-img-row">
              <div className="small-img">
                <img src={njitThumbnail} alt="NJIT Thumbnail" />
                <i className="fas fa-play" onClick={() => playVideo(njitVideo)}></i>
              </div>
              <p>Check out how the NJIT men's soccer team bonded over a fun round of soccer golf</p>
            </div>

            <div className="small-img-row">
              <div className="small-img">
                <img src={pier5Thumbnail} alt="Pier 5 Thumbnail" />
                <i className="fas fa-play" onClick={() => playVideo(pier5Video)}></i>
              </div>
              <p>A view from the Pier 5 football field</p>
            </div>
          </div>
        </div>
      </div>

      {isPlaying && (
        <div className="video-player" id="videoPlayer">
          <video controls autoPlay>
            <source src={videoSrc} type="video/mp4" />
          </video>
          <i className="fas fa-times close-btn" onClick={stopVideo}></i>
        </div>
      )}
    </section>
  );
}

export default UniversityLife;
