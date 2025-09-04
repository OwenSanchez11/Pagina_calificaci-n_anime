const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const user = document.getElementById("user")
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const favoriteBtn = document.getElementById("save-btn")



const scrollAmount = 200;

function redirectFavorites(){
    window.location.href ="favoritos.html"
}

favoriteBtn.addEventListener("click", redirectFavorites);


menuToggle.addEventListener("click", () =>{
    navLinks.classList.toggle("show");
});

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const caption = document.getElementById("slider-caption");

const captions = ["AO ASHI", 
    "LOS DIARIOS DE LA BOTICARIA", 
    "FIRE FORCE"];

function showNextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
    caption.textContent = captions[currentIndex]
}

setInterval(showNextSlide, 5000);


document.querySelectorAll(".carousel-wrapper").forEach(wrapper => {
    const carousel = wrapper.querySelector(".carrousel-track, .carrousel-track2, .carrousel-track3, .carrousel-track4");
    const scrollLeftBtn = wrapper.querySelector(".scroll-left");
    const scrollRightBtn = wrapper.querySelector(".scroll-right");

    const scrollAmount = 200;

    scrollLeftBtn.addEventListener("click", () => {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    scrollRightBtn.addEventListener("click", () => {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });
});


function redirect() {
    window.location.href="login.html"
}


user.addEventListener("click", redirect);

searchBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    searchInput.classList.toggle("show");
    if (searchInput.classList.contains("show")) {
        searchInput.focus();
    }
})

document.addEventListener("click", (e) => {
    if (
        !searchInput.contains(e.target) &&
        !searchBtn.contains(e.target) 
    ) {
        searchInput.classList.remove("show");
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        searchInput.classList.remove("show");
    }
})



window.onload = function() {
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.classList.add('oculto'); // Aplica el fade
            setTimeout(() => loader.remove(), 500); // Lo elimina después
        }
    }, 4000);
}
