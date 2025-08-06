async function cargarManga() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) {
    console.error('No hay un ID en la URL');
    return;
  }

  try {
    const response = await fetch(`https://api.jikan.moe/v4/manga/${id}/full`);
    const data = await response.json();
    const manga = data.data;
    console.log(manga);

    document.title = manga.title;
    document.getElementById('titulo-anime').textContent = manga.title;
    document.getElementById('imagen-anime').src = manga.images.jpg.image_url;
    document.getElementById('sinopsis').textContent = manga.synopsis;
    document.getElementById('genero').textContent = `Género: ${manga.genres.map(g => g.name).join(", ")}`;
    document.getElementById('año-lanzamiento').textContent = `Año de lanzamiento: ${manga.published.from?.split("T")[0]}`;
    document.getElementById('episodios').textContent = `Número de episodios: ${manga.chapters}`;
    const author = manga.authors[0]?.name || 'Desconocido';
    document.getElementById('estudio').innerText = `Autor: ${author}`;


  }
  catch (error) {
    console.error("Error fetching manga data: ", error)
  }
}

cargarManga();