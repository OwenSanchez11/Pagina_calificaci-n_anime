//función para obtener los animes recomendados de la primera sección
async function topRecomendados() {
  try {
    const response = await fetch('https://api.jikan.moe/v4/seasons/now')
    const data = await response.json();
    const animes1 = data.data.slice(1,7);


    const contenedor = document.querySelector('.carrousel-track');
    contenedor.innerHTML = '';

    animes1.forEach(anime => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('anime-card');

      tarjeta.innerHTML = `
        <a href="anime.html?id=${anime.mal_id}">
          <div class="card-inner">
            <div class="card-front">
              <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
              <p>${anime.title}</p>
            </div>
            <div class="card-back">
              <p>Score: ${anime.score}</p>
            </div>
          </div>
        </a>
      `;

      contenedor.appendChild(tarjeta);
});
  }
  catch (error) {
      console.error("Error fetching anime data: ", error);
    }
}


topRecomendados();

//funcion para sección animes recomendados

async function recomendaciones() {
  try {
    const respuesta = await fetch('https://api.jikan.moe/v4/anime/1/recommendations');
    const datos = await respuesta.json();

    const animes = datos.data.slice(0, 6);


    const contenedor = document.querySelector('.carrousel-track2');
    contenedor.innerHTML = '';

    animes.forEach((anime) => {
      const imagenUrl = anime.entry.images?.jpg?.image_url 
      const titulo = anime.entry.title;
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('anime-card2');

      tarjeta.innerHTML = `
        <a href="anime.html?id=${anime.entry.mal_id}">
          <div class="card-inner">
            <div class="card-front">
              <img src="${imagenUrl}" alt="${titulo}">
              <p>${titulo}</p>
            </div>
          </div>  
        `;
        contenedor.appendChild(tarjeta);
    });

  } catch (error) {
    console.log("Error fetching anime data: ", error);
  }
}

recomendaciones();


async function topAnimes() {
  try {
    const response = await fetch('https://api.jikan.moe/v4/top/anime');
    const data = await response.json();
    const animes = data.data.slice(0,6);
    console.log(animes);


    const contenedor = document.querySelector('.carrousel-track3');
    contenedor.innerHTML = '';

    animes.forEach(anime2 => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('anime-card3');

      tarjeta.innerHTML = `
        <a href ="anime.html?id=${anime2.mal_id}">
          <div class="card-inner">
            <div class="card-front">
              <img src="${anime2.images.jpg.image_url}" alt="${anime2.title}">
              <p>${anime2.title}</p>
            </div>
          </div>
          `
          contenedor.appendChild(tarjeta);
    })
  }
  catch (error) {
    console.error("Error fetching top anime data: ", error);
  }
}

topAnimes();

async function topManga() {
  try {
    const response = await fetch('https://api.jikan.moe/v4/top/manga');
    const data = await response.json();
    const mangas = data.data.slice(0,6);

    const contenedor = document.querySelector('.carrousel-track4');
    contenedor.innerHTML = '';

    mangas.forEach(manga => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('anime-card4');
      tarjeta.innerHTML = `
        <a href ="manga.html?id=${manga.mal_id}">
          <div class="card-inner">
            <div class="card-front">
              <img src="${manga.images.jpg.image_url}" alt="${manga.title}">
              <p>${manga.title}</p>
            </div>
          `;
          contenedor.appendChild(tarjeta);
    })
  }
  catch (error) {
    console.error("error fetching top manga data: ", error);
  }
}

topManga();