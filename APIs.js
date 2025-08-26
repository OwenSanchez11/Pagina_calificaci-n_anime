//Script para la pagina principal index en donde llama las API y muestra los datos en el HTML


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

//función para seccion de los animes top

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


//funcion para la sección de mangas top
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


//función para la sección de noticias de anime
async function noticiasAnime() {
  try {
    const response = await fetch('https://api.jikan.moe/v4/anime/1/news');
    const data = await response.json();
    const noticia = data.data.slice(0,2)
    console.log(noticia);

    const contenedor = document.querySelector('.contenedor-extra');
    contenedor.innerHTML = '';

    noticia.forEach(noticia => {
      const noticia2 = document.createElement('div');
      noticia2.classList.add('noticia');

      noticia2.innerHTML = `
        <a href="${noticia.forum_url}">
        <div class="noticia">
            <img src="${noticia.images.jpg.image_url}" alt="${noticia.title}">
            <h3 class="titulo-noticia">${noticia.title}</h3>
            <p>${noticia.excerpt}</p>
        </div>
      `
      contenedor.appendChild(noticia2)
    })
  }
  catch (error) {
    console.error("Error en la carga de datos de la API: ", erorr);
  }
}

//función para la segunda sección de noticias de anime en columna

async function noticiasAnime2() {
    try {
      const response = await fetch('https://api.jikan.moe/v4/anime/1/news');
      const data = await response.json();
      const noticia = data.data.slice(3,6)

      const contenedor = document.querySelector('.segundo-contenedor');
      contenedor.innerHTML = '' ;

      noticia.forEach(noticia=> {
        const noticias = document.createElement('div');
        noticias.classList.add('noticias-columna');
        
        noticias.innerHTML = `
         <a href="${noticia.forum_url}">
          <div class="noticias-columna">
              <img src="${noticia.images.jpg.image_url}" alt="${noticia.title}">
                  <div class="text">
                      <h3 class="titulo-noticia">${noticia.title}</h3>
                      <p>${noticia.excerpt}</p>
                  </div>
            </div>
        `

        contenedor.appendChild(noticias)
      })
    }
    catch(error) {
      console.error("Error al cargar la API: ", error)
    }
}


//funcion para cargar ANIME Y MANGA en la sección princiapal
//aquí les di un delay para que no se saturara la API con las peticiones
function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function cargarTodo() {
  try{
    await topRecomendados();
    await delay(1000);

    await recomendaciones();
    await delay(1000);

    await topAnimes();
    await delay(1000);

    await topManga();
    await delay(1000);

    await noticiasAnime();
    await delay(1000);

    await noticiasAnime2();
    await delay(1000)
  }
  catch (error) {
    console.error("error en la carga de datos de la API", error);
  }
  
}

//llamo a la función para que cargue toda mi pagina
cargarTodo();

