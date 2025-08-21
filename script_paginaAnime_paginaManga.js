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
  }
});

nextButton.addEventListener('click', () => {
  currentPage++;
  cambioPagina();
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
        </a>
      `;
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
        </a>
      `;
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
            <a href='manga.html?id=${item.mal_id}'>
            <div class="card-inner">
                <div class="card-front">
                    <img src="${item.images.jpg.image_url}" alt="${item.title}">
                    <p>${item.title}</p>
                </div>
            </div>
                </a>
            `;
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
