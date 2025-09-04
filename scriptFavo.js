const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const homeBtn = document.querySelector("#home");


function redirectHome() {
    window.location.href = "index.html";
}

homeBtn.addEventListener("click", redirectHome);

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

function redirect() {
    window.location.href="login.html"
}

user.addEventListener("click", redirect);


const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
const container = document.getElementById('anime-container');

favoritos.forEach(fav => {
    const card = document.createElement('div');
    card.classList.add('anime-card');
    card.innerHTML = `
        <a href='anime.html?id=${fav.id}'>
            <div class="card-inner">
                <div class="card-front">
                    <img src="${fav.img}" alt="${fav.title}">
                    <p>${fav.title}</p>
                </div> `
    container.appendChild(card);

})
if (favoritos.length === 0) {
    container.innerHTML = '<p>No tienes animes favoritos guardados.</p>';
}

