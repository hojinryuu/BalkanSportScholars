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
    <section class="gallery-section">
        <div class="container-gallery">
            <h1>Our Players</h1>
            <div class="gallery-wrap">
                <button class="carousel-button prev" id="backBtn">&#8592;</button>
                <div class="gallery">
                    <div class="gallery-image">
                        <span><img src="img/player1.jpeg" alt="Xhoel Lutaj"></span>
                        <span><img src="img/player2.jpeg" alt="Ermal Ahmetaj"></span>
                        <span><img src="img/player3.jpeg" alt="Franc Rabeta"></span>
                    </div>
                </div>
                <button class="carousel-button next" id="nextBtn">&#8594;</button>
            </div>
        </div>
    </section>

   
    <script>

        const gallery = document.querySelector(".gallery");
        const nextBtn = document.getElementById("nextBtn");
        const prevBtn = document.getElementById("backBtn");

        let galleryItems = gallery.querySelectorAll('div');
        let firstClone = galleryItems[0].cloneNode(true);
        let lastClone = galleryItems[galleryItems.length - 1].cloneNode(true);

        gallery.appendChild(firstClone);
        gallery.prepend(lastClone);

        const itemWidth = galleryItems[0].offsetWidth;
        let scrollPos = itemWidth;

        gallery.scrollLeft = scrollPos;

        nextBtn.addEventListener("click", () => {
            if (scrollPos >= gallery.scrollWidth - itemWidth * 2) {
                scrollPos = itemWidth;
                gallery.scrollLeft = scrollPos;
            }
            gallery.style.scrollBehavior = "smooth";
            scrollPos += itemWidth;
            gallery.scrollLeft = scrollPos;
        });

        prevBtn.addEventListener("click", () => {
            if (scrollPos <= itemWidth) {
                scrollPos = gallery.scrollWidth - itemWidth * 2;
                gallery.scrollLeft = scrollPos;
            }
            gallery.style.scrollBehavior = "smooth";
            scrollPos -= itemWidth;
            gallery.scrollLeft = scrollPos;
        });

        // handles continuous looping 

        gallery.addEventListener('scroll', () => {
            if (gallery.scrollLeft >= gallery.scrollWidth - itemWidth) {
                gallery.style.scrollBehavior = "auto";
                gallery.scrollLeft = itemWidth;
                scrollPos = itemWidth;
            } else if (gallery.scrollLeft <= 0) {
                gallery.style.scrollBehavior = "auto";
                gallery.scrollLeft = gallery.scrollWidth - itemWidth * 2;
                scrollPos = gallery.scrollWidth - itemWidth * 2;
            }
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
.gallery-section {
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: white;
}

.container-gallery {
    padding: 5% 8%;
    width: 100%;
}

.container-gallery h1 {
    color: var(--header-navy-color);
    font-size: 4rem;
    text-transform: capitalize;
}

.gallery-wrap {
    border: 1px solid magenta;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10% auto;
}

.gallery {    
    border: 1px solid blue;
    width: 900px;
    display: flex;
    overflow-x: scroll;
}

.gallery-image {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
    padding: 10px;
    flex: none;
}

.gallery-image img {
    width: 100%;
    filter: grayscale(100);
    transition: transform 0.5s;
}

.gallery::-webkit-scrollbar {
    display: none;
}

.carousel-button {
    background: none;
    border: none;
    font-size: 4rem;
    color: rgba(255, 255, 255, .5);
    cursor: pointer;
    border-radius: .25rem;
    padding: 0 .5rem;
    margin: 0 0.25em;
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

