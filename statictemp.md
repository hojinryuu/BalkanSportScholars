<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BalkanSportsScholars</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/athletes.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <!-- navbar -->
    <header>
        <div class="navbar container-nav">
            <div class="navbar-logo">
                <img src="img/logo.png" alt="BalkanSportsScholars logo">
                <h1>BalkanSportsScholars</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="athletes.html">Athletes</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- gallery section -->
    <div class="gallery-wrap">
        <button class="carousel-button prev" id="backBtn">&#8592;</button>
        
        <div class="gallery">
            <div>
                <span><img src="img/player1.jpeg" alt="Xhoel Lutaj"></span>
                <span><img src="img/player2.jpeg" alt="Ermal Ahmetaj"></span>
                <span><img src="img/player3.jpeg" alt="Franc Rabeta"></span>
            </div>
            <div>
                <span><img src="img/player1.jpeg" alt="Xhoel Lutaj"></span>
                <span><img src="img/player2.jpeg" alt="Ermal Ahmetaj"></span>
                <span><img src="img/player3.jpeg" alt="Franc Rabeta"></span>
            </div>
        </div>

        <button class="carousel-button next" id="nextBtn">&#8594;</button>
    </div>

    <script>

        let scrollContainer = document.querySelector(".gallery");
        let prevBtn = document.getElementById("backBtn");
        let nextBtn = document.getElementById("nextBtn");

        nextBtn.addEventListener("click", () => {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft += 300;
        });
        // .gallery width is 900 px

        prevBtn.addEventListener("click", () => {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft -= 300;
        });

    </script>
    
</body>
</html>

:root {
    --header-navy-color:#010137;
    --main-bg-grey:#cccccc;
    --main-bg-navy:#191a2b;
    --main-bg-red:#C40404;
    --btn-hover-red:#A30303;
}

/* gallery section */
.gallery {
    width: 900px;
    display: flex;
    overflow-x: scroll;
}

.gallery div {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
    padding: 10px;
    flex: none;
}

.gallery div img {
    width: 100%;
    filter: grayscale(100);
    transition: transform 0.5s;
}

.gallery::-webkit-scrollbar {
    display: none;
}

.gallery-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10% auto;
}

.carousel-button {
    background: none;
    border: none;
    font-size: 4rem;
    color: rgba(255, 255, 255, .5);
    cursor: pointer;
    border-radius: .25rem;
    padding: 0 .5rem;
    background-color: rgba(0, 0, 0, .1);
}

.carousel-button:hover,
.carousel-button:focus {
    color: white;
    background-color: rgba(0, 0, 0, 0.2);
}

.carousel-button:focus {
    outline: 1px solid black;
}

.gallery div img:hover {
    filter: grayscale(0);
    cursor: pointer;
    transform: scale(1.1);
}