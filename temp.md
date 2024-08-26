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

    <!-- players section -->
    <section aria-label="newest players">
        <div class="carousel" data-carousel>
            <button class="carousel-button prev" data-carousel-button="prev">&#8592;</button>
            <button class="carousel-button next" data-carousel-button="next">&#8594;</button>
            <ul data-slides>
                <li class="slide" data-active>
                    <img src="img/player1.jpeg" alt="Xhoel Lutaj"> 
                </li>
                <li class="slide">
                    <img src="img/player2.jpeg" alt="Ermal Ahmetaj"> 
                </li>
                <li class="slide">
                    <img src="img/player3.jpeg" alt="Franc Rabeta"> 
                </li>
            </ul>
        </div>
    
    </section>
    <script>
        const buttons = document.querySelectorAll("[data-carousel-button]");
        
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const offset = button.dataset.carouselButton === "next" ? 1 : -1;
                const slides = button
                    .closest("[data-carousel]")
                    .querySelector("[data-slides]");

                const activeSlide = slides.querySelector("[data-active]");
                let newIndex = [...slides.children].indexOf(activeSlide) + offset;
                if (newIndex < 0) newIndex = slides.children.length - 1;
                if (newIndex >= slides.children.length) newIndex = 0;

                slides.children[newIndex].setAttribute("data-active", "true");
                activeSlide.removeAttribute("data-active");
            });
        });
    </script>
</body>
</html>


the css
:root {
    --header-navy-color:#010137;
    --main-bg-grey:#cccccc;
    --main-bg-navy:#191a2b;
    --main-bg-red:#C40404;
    --btn-hover-red:#A30303;
}

/* players section */
.carousel {
    width: 100vh;
    height: 100vh;
    position: relative;
}

.carousel > ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: 200ms opacity ease-in-out;
    transition-delay: 200ms;
}

.slide > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.slide[data-active] {
    opacity: 1;
    z-index: 1;
    transition-delay: 0ms;
}

.carousel-button {
    position: absolute;
    z-index: 2;
    background: none;
    border: none;
    font-size: 4rem;
    top: 50%;
    transform: translateY(-50%);
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

.carousel-button.prev {
    left: 1rem;
}

.carousel-button.next {
    right: 1rem;
}
