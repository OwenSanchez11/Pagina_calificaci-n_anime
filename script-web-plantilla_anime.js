const user = document.getElementById("user")
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const homeBtn = document.querySelector("#home");
const favoriteBtn = document.getElementById("save-btn")


function redirectHome() {
    window.location.href = "index.html";
}

homeBtn.addEventListener("click", redirectHome);



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

const stars = document.querySelectorAll('.rating-stars .star');
let selectedRating = 0;

stars.forEach((star,index) => {
    star.addEventListener('mouseover', () => {
        stars.forEach((s, i) => {
            s.classList.toggle('hover', i <= index);
        });
    });

    star.addEventListener('mouseout', () => {
    stars.forEach((s) => {
        s.classList.remove('hover');
    });
});

    star.addEventListener('click', () => {
        selectedRating = index + 1;
        stars.forEach((s, i) => {
            s.classList.toggle('selected', i < selectedRating);
        });
        console.log(`Calificación seleccionada: ${selectedRating}`);
    })

    
   
})




const animeid = new URLSearchParams(window.location.search).get('id');
const savedRating = localStorage.getItem(`rating-${animeid}`);

if (savedRating) {
    stars.forEach((star, index) => {
        star.classList.toggle('selected', index < savedRating);
    });
}

stars.forEach((star, index) => {
    star.addEventListener('click', ()=> {
        const rating = index + 1;
        localStorage.setItem(`rating-${animeid}`, rating);

        stars.forEach((s, i) => {
            s.classList.toggle('selected', i < rating);
        });

        console.log(`Calificación guardada: ${rating}`);

    })
})

function redirectFavorites() {
    window.location.href = "favoritos.html";
}

favoriteBtn.addEventListener("click", redirectFavorites);