async function cargarAnime() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) {
    console.error('No hay un ID en la URL');
    return;
  }

  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
    const data = await response.json();
    const anime = data.data;

    document.title = anime.title;
    document.getElementById('titulo-anime').textContent = anime.title;
    document.getElementById('imagen-anime').src = anime.images.jpg.image_url;
    document.getElementById('sinopsis').textContent = anime.synopsis;
    document.getElementById('genero').textContent = `Género: ${anime.genres.map(g => g.name).join(", ")}`;
    document.getElementById('año-lanzamiento').textContent = `Año de lanzamiento: ${anime.year}`;
    document.getElementById('episodios').textContent = `Número de episodios: ${anime.episodes}`;
    document.getElementById('estudio').textContent = `Estudio: ${anime.studios[0]?.name || 'Desconocido'}`;
  } 
  catch (error) {
    console.error("Error fetching anime data: ", error);
  }
}

cargarAnime(); 


