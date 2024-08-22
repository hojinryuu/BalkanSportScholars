  <section class="uni-life">
        
        <div class="container-uni-life">
            <h1>Life as a Student-Athlete</h1>
            <div class="uni-row">

                    <div class="feature-img">
                        <img src="img/uni-life-feature.jpg" alt="University Life Feature Image">
                        <i class="fas fa-play" onclick="playVideo('img/daily.mp4')"></i>
                    </div>
                

                <div class="uni-col">
                    <div class="small-img-row">
                        <div class="small-img">
                            <img src="img/uni-life-feature.jpg" alt="University Life Feature Image">
                            <!-- <i class="fas fa-play" onclick="playVideo('img/vid1.mp4')"></i> -->
                        </div>
                        <p>A day in a life of College Soccer player</p>
                    </div>

                    <div class="small-img-row">
                        <div class="small-img">
                            <img src="img/uni-life-feature.jpg" alt="University Life Feature Image">
                            <!-- <i class="fas fa-play" onclick="playVideo('img/vid1.mp4')"></i> -->
                        </div>
                        <p>New Jersey Institute of Technology men's soccer team bonds over a fun round of soccer golf
                        </p>
                    </div>
                    
                    <div class="small-img-row">
                        <div class="small-img">
                            <img src="img/uni-life-feature.jpg" alt="University Life Feature Image">
                            <!-- <i class="fas fa-play" onclick="playVideo('img/vid1.mp4')"></i> -->
                        </div>
                        <p> How to add multiple videos in a website or<br>
                            to make a video gallery
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="video-player" id="videoPlayer">
            <video controls autoplay id="myVideo">
        
            </video>
            <i class="fas fa-times close-btn" onclick="stopVideo()"></i>
        </div> -->

    </section>

    <script>
        var videoPlayer = document.getElementById("videoPlayer");
        var myVideo = document.getElementById("myVideo");

        function stopVideo() {
            videoPlayer.style.display = "none";
        }

        function playVideo(file){
            myVideo.src = file;
            videoPlayer.style.display = "block";
        }
    </script>



    /* uni-life section */
.uni-life {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: var(--main-bg-navy);
}

.container-uni-life {
    padding: 5% 8%;
}

.container-uni-life h1 {
    color: #fff;
    font-size: 4rem;
    text-transform: capitalize;
}

.feature-img  {
    border: 1px solid magenta;
}
.feature-img img {
    height: 500px;
    display: block;
}

/* .uni-row {
    border: 1px solid magenta;
    margin-top: 60px;
    display: flex;
    align-items: center;
}

.uni-col {
    border: 1px solid powderblue;
    flex-basis: 50%;
    min-width: 50px;
} */

/* .small-img-row {
    display: flex;
    height: fit-content;
    background: #efefef;
    margin: 20px 0;
    align-items: center;
    border-radius: 6px;
    overflow: hidden;
    width: 85%;
} 

.small-img {
    position: relative;
    width: 150px;
    height: auto;
}

.small-img img {
    display: block;
    height: auto;
} */

/* .container-uni-life i {
    color: rgb(196, 4, 4);
    font-size: 4rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
}

.small-img i {
    font-size: 1.75rem;
}

.small-img-row p {
    margin-left: 20px;
    color: #707070;
    line-height: 22px;
    font-size: 15px;
}

.video-player {
    border: 1px solid magenta;
    max-height: 100px;
    cursor: pointer;
    display: none;
}

video:focus {
    outline: none;
}

.video-player i {
    color: rgb(196, 4, 4);
    font-size: 1.75rem;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    cursor: pointer;
} */