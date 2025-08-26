document.querySelector('.fila-cartas').addEventListener('click', (e) => {
  if (e.target.classList.contains('fav-icon')) {
    e.preventDefault();
    const icon = e.target;
    const id = icon.getAttribute('data-id');
    const title = icon.getAttribute('data-title');
    const img = icon.getAttribute('data-img');
    
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
   

    if (favoritos.some(fav => fav.id == id)) {
        favoritos = favoritos.filter(fav => fav.id !== id) 
        icon.src = "assets/emptyHeart.svg";
      }
      else {
        favoritos.push({id, title, img});
        icon.src = "assets/heart-full.svg";
      }
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
})


let currentPage = 1;

const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

// 👇 OBTENER el tipo de la URL
const params = new URLSearchParams(window.location.search);
const tipo = params.get('tipo');

// Eventos de paginación
prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    cambioPagina();
    window.scrollTo({top: 0, behavior: 'smooth'});

  }
});

nextButton.addEventListener('click', () => {
  currentPage++;
  cambioPagina();
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// ========================
// Función para cargar ANIME
// ========================
async function allAnime(page = 1) {
  try {
    const response = await fetch('https://api.jikan.moe/v4/anime/1/recommendations');
    const data = await response.json();

    const porPagina = 20;
    const totalPaginas = Math.ceil(data.data.length / porPagina);
    const start = (page - 1) * porPagina;
    const end = start + porPagina;
    const animes = data.data.slice(start, end);

    prevButton.disabled = page === 1;
    nextButton.disabled = page === totalPaginas;

    const contenedor = document.querySelector('.fila-cartas');
    contenedor.innerHTML = '';

    animes.forEach(item => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('anime-card');
      tarjeta.innerHTML = `
        <a href='anime.html?id=${item.entry.mal_id}'>
          <div class="card-inner">
            <div class="card-front">
              <img src="${item.entry.images.jpg.image_url}" alt="${item.entry.title}">
              <p>${item.entry.title}</p>
            </div>
          </div>
          <img 
              src = "assets/emptyHeart.svg"
              class = "fav-icon"
              data-id="${item.entry.mal_id}" 
              data-title="${item.entry.title}" 
              data-img="${item.entry.images.jpg.image_url}"
           >
        </a>
      `;
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        if (favoritos.some(fav => fav.id == item.entry.mal_id)) {
          tarjeta.querySelector('.fav-icon').src = "assets/heart-full.svg";
        }
      contenedor.appendChild(tarjeta);
    });
  } catch (error) {
    console.error('Error llamando a la API: ', error);
  }
}

// ========================
// Función para cargar MANGA
// ========================
async function allManga(page = 1) {
  try {
    const response = await fetch('https://api.jikan.moe/v4/manga/1/recommendations');
    const data = await response.json();

    const porPagina = 20;
    const totalPaginas = Math.ceil(data.data.length / porPagina);
    const start = (page - 1) * porPagina;
    const end = start + porPagina;
    const mangas = data.data.slice(start, end);

    prevButton.disabled = page === 1;
    nextButton.disabled = page === totalPaginas;

    const contenedor = document.querySelector('.fila-cartas');
    contenedor.innerHTML = '';

    mangas.forEach(item => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('anime-card');
      tarjeta.innerHTML = `
        <a href='manga.html?id=${item.entry.mal_id}'>
          <div class="card-inner">
            <div class="card-front">
              <img src="${item.entry.images.jpg.image_url}" alt="${item.entry.title}">
              <p>${item.entry.title}</p>
            </div>
          </div>
          <img 
              src = "assets/emptyHeart.svg"
              class = "fav-icon"
              data-id="${item.entry.mal_id}" 
              data-title="${item.entry.title}" 
              data-img="${item.entry.images.jpg.image_url}"
           >
        </a>
      `;
      let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        if (favoritos.some(fav => fav.id == item.entry.mal_id)) {
        tarjeta.querySelector('.fav-icon').src = "assets/heart-full.svg";
        }
      contenedor.appendChild(tarjeta);
    });
  } catch (error) {
    console.error('Error al conectar con la API', error);
  }
}



async function allTop(page = 1) {
    try {
        const response= await fetch('https://api.jikan.moe/v4/top/anime');
        const data = await response.json();
        console.log(data)

        const porPagina = 20;
        const totalPaginas = Math.ceil(data.data.length / porPagina);
        const start = (page - 1) * porPagina;
        const end = start + porPagina;
        const top = data.data.slice(start, end);

        prevButton.disabled = page === 1;
        nextButton.disabled = page === totalPaginas;

        const contenedor = document.querySelector('.fila-cartas');
        contenedor.innerHTML = '';

        top.forEach(item => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('anime-card');
        tarjeta.innerHTML = `
            <a href='anime.html?id=${item.mal_id}'>
            <div class="card-inner">
                <div class="card-front">
                    <img src="${item.images.jpg.image_url}" alt="${item.title}">
                    <p>${item.title}</p>
                </div>
            </div>
                <img 
                    src = "assets/emptyHeart.svg"
                    class = "fav-icon"
                    data-id="${item.mal_id}" 
                    data-title="${item.title}" 
                    data-img="${item.images.jpg.image_url}"
                >
                </a>
            `;
            let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
              if (favoritos.some(fav => fav.id == item.mal_id)) {
              tarjeta.querySelector('.fav-icon').src = "assets/heart-full.svg";
            }
            contenedor.appendChild(tarjeta);
            });
        } 
        catch (error) {
            console.error('Error al conectar con la API', error);
        }
}


// ========================
// Controlador de página
// ========================
function cambioPagina() {
  if (tipo === 'anime') {
    allAnime(currentPage);
  } else if (tipo === 'manga') {
    allManga(currentPage);
  }
  else if (tipo === 'top') {
    allTop(currentPage)
  }
}

// 👇 Ejecutar al cargar la página
cambioPagina();
