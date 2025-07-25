const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const user = document.getElementById("user")
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");



const scrollAmount = 200;


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
    const carousel = wrapper.querySelector(".carrousel-track");
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

document.querySelectorAll('.noticia-1, .noticia-2').forEach(noticia => {
  noticia.addEventListener('click', function () {
    if (this.classList.contains('noticia-1')) {
      window.location.href = "fireforce.html";
    } else if (this.classList.contains('noticia-2')) {
      window.location.href = "sololeveling.html";
    }
  });
});

document.querySelectorAll('.noticias-columna').forEach(noticias => {
    noticias.addEventListener('click', function () {
        const id = this.dataset.id;

        if (id === 'dandadan') {
            window.location.href = "dandadan.html";
        } else if (id === 'kimetsu') {
            window.location.href = "kimetsu.html";
        } else if (id === 'grand blue') {
            window.location.href = "grandblue.html";
        }
    });
});

document.querySelectorAll('.anime-card').forEach(card => {
    card.addEventListener('click', function () {
        const id = this.dataset.id;

        if (id === 'monster') {
            window.location.href = "monster.html";
        } else if (id === 'solo leveling') {
            window.location.href = "sololeveling.html";
        }else if (id === 'slime') {
            window.location.href = "slime.html";
        }else if (id === 'chainsaw') {
            window.location.href = "chainsaw.html";
        }else if (id ==='diamond no ace') {
            window.location.href = "diamondnoace.html";
        }else if (id === 'jujutsu') {
            window.location.href = "jujutsu.html";
        }else if (id ==='one piece') {
            window.location.href ="onepiece.html";
        }else if (id === 'gachiakuta') {
            window.location.href = "gachiakuta.html";
        }else if (id === 'overlord') {
            window.location.href = "overlord.html";
        }else if (id === 'kimetsu no yaiba') {
            window.location.href = "kimetsu.html";
        }else if (id === 'haikyuu') {
            window.location.href = "haikyuu.html";
        }else if(id ==='shingeki') {
            window.location.href = "shingeki.html";
        }
    })
});

// Creación de nuevas tarjetas de anime
const animeContainer = document.querySelector("#anime-container .carrousel-track");

animes.forEach(anime => {
  const link = document.createElement('a');
  link.href = `anime.html?id=${anime.id}`;

  const card = document.createElement('div');
  card.classList.add('anime-card');
  card.setAttribute('data-id', anime.id);

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="${anime.imagen}" alt="${anime.titulo}">
        <p>${anime.titulo}</p>
      </div>
      <div class="card-back">
        <p>Género: ${anime.genero}</p>
        <p>Rating: ${anime.rating}</p>
      </div>
    </div>
  `;

  link.appendChild(card);
  animeContainer.appendChild(link);
});



const animeContainer2 = document.querySelector("#anime-container2 .carrousel-track");

animes2.forEach(anime => {
  const link = document.createElement('a');
  link.href = `anime.html?id=${anime.id}`;

  const card = document.createElement('div');
  card.classList.add('anime-card');
  card.setAttribute('data-id', anime.id);

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="${anime.imagen}" alt="${anime.titulo}">   
        <p>${anime.titulo}</p>
      </div>
        <div class="card-back">
            <p>Género: ${anime.genero}</p>
            <p>Rating: ${anime.rating}</p>
        </div>
    </div>
    `;
    link.appendChild(card);
    animeContainer2.appendChild(link);
});