const params =  new URLSearchParams(window.location.search);
const id = params.get("id");
console.log("ID recibido:", id);


const animes = {
    fireforce: {
        titulo: "Fire Force",
        sinopsis: "Una historia de bomberos con poderes sobrenaturales.",
        imagen: "assets/fireforce.jpg",
        genero: "Acción, Fantasía",
        añoLanzamiento: "Año de lanzamiento: 2019",
        episodios: "Número de episodios: más de 50",
        estudio: "Estudio: David Production",
    },
    kimetsu: {
        titulo: "Demon Slayer",
        sinopsis: "La historia de Kimetsu no Yaiba (Guardianes de la Noche) sigue a Tanjiro Kamado, un joven que tras el asesinato de su familia por un demonio, se une al Cuerpo de Cazadores de Demonios para encontrar una cura para su hermana Nezuko, convertida en demonio tras el ataque. A través de su viaje, Tanjiro se enfrenta a numerosos demonios, cada vez más poderosos, mientras busca la forma de restaurar la humanidad de Nezuko y vengar a su familia. ",
        imagen: "assets/kimetsu.jpg",
        genero: "Acción, Aventura, Fantasía",
        añoLanzamiento: "Año de lanzamiento: 2019",
        episodios: "Número de episodios: Más de 50",
        estudio: "Estudio: ufotable",
    },
    shingeki: {
        titulo: "Attack on Titan",
        sinopsis: "La historia de Shingeki no Kyojin (Ataque a los Titanes) se desarrolla en un mundo donde la humanidad, diezmada por gigantes humanoides llamados titanes, se refugia dentro de tres enormes murallas para protegerse. La trama sigue a Eren Yeager, Mikasa Ackerman y Armin Arlert, quienes, tras la destrucción de su ciudad natal por un titán colosal, juran vengarse y unirse al Cuerpo de Exploración para luchar contra los titanes. La serie explora temas de supervivencia, guerra, identidad y la lucha por la libertad en un mundo dominado por la amenaza de los titanes. .",
        imagen: "assets/shingeki.jpg",
        genero: "Acción, Drama, Fantasía oscura",
        añoLanzamiento: "Año de lanzamiento: 2013 - 2021",
        episodios: "Número de episodios: Más de 1000",
        estudio: "Estudio: Wit Studio, Mappa",
    },
    onepiece: {
        titulo: "One Piece",
        sinopsis: "La historia de One Piece gira en torno a Monkey D. Luffy, un joven que sueña con convertirse en el Rey de los Piratas. Para lograrlo, debe encontrar el tesoro legendario conocido como One Piece, que está escondido en el peligroso mar llamado Grand Line. Luffy forma su propia banda, los Piratas del Sombrero de Paja, y juntos se enfrentan a numerosos desafíos y enemigos poderosos en su búsqueda del tesoro y su sueño. ",
        imagen: "assets/Arco_de_Egghead.jpg",
        genero: "Género: Aventura, Fantasía, Comedia",
        añoLanzamiento: "Año de lanzamiento: 1999 - Presente",
        episodios: "Número de episodios: Más de 1000",
        estudio: "Estudio: Toei Animation",

    },
    jujutsu: {
        titulo: "Jujutsu Kaisen",
        sinopsis: "sigue a Yuji Itadori, un estudiante de secundaria que, tras encontrarse con un objeto maldito, se involucra en el mundo de la hechicería Jujutsu. Él se convierte en el recipiente de Ryomen Sukuna, una poderosa maldición, y debe unirse a la Escuela Metropolitana de Tokio de Artes Exorcistas para aprender a controlar sus poderes y proteger a otros de las maldiciones. ",
        imagen: "assets/jujutsu.jpg",
        genero: "Acción, Sobrenatural, Fantasía oscura",
    },
    gachiakuta: {
        titulo: "Gachiakuta",
        sinopsis: "Rudo, un joven que vive en los barrios marginales de una ciudad flotante y que es falsamente acusado de asesinato. Exiliado al Abismo, un lugar lleno de basura y monstruos, Rudo descubre un nuevo poder y se une a los Limpiadores para sobrevivir y buscar venganza por la injusta condena",
        imagen: "assets/Gachiakuta.jpg",
        genero: "Acción, Aventura, Fantasía",
        añoLanzamiento: "Año de lanzamiento: 2025",
        episodios: "Número de episodios: En emisión",

    },
    overlord: {
        titulo: "Overlord",
        sinopsis: "sigue a Momonga, un jugador veterano de un popular MMORPG llamado YGGDRASIL, quien se queda conectado al juego justo cuando sus servidores están a punto de cerrar. Para su sorpresa, Momonga descubre que no solo no se ha desconectado, sino que ha sido transportado a un mundo de fantasía donde el juego se ha convertido en realidad, y los personajes no jugadores (NPCs) han desarrollado conciencia propia",
        imagen: "assets/overlord.jpg",
        genero: "Isekai, Fantasía oscura",
        añoLanzamiento: "Año de lanzamiento: 2015",
        episodios: "Número de episodios: Más de 50",
    },
    haikyuu: {
        titulo: "Haikyuu!!",
        sinopsis: "narra la historia de Shoyo Hinata, un joven apasionado por el voleibol que, a pesar de su baja estatura, sueña con convertirse en un gran jugador y emular al 'Pequeño Gigante'. La serie sigue su trayectoria en el equipo de voleibol de la escuela secundaria Karasuno, donde se enfrenta a desafíos, rivalidades y momentos de crecimiento personal, todo mientras busca alcanzar la cima del voleibol escolar. ",
        imagen: "assets/haikyuu.jpg",
        genero: "Deportes, Comedia, Drama",
        añoLanzamiento: "Año de lanzamiento: 2014 - 2020",
        episodios: "Número de episodios: Más de 100",
        estudio: "Estudio: Production I.G",

    },
    monster: {
        titulo: "Monster",
        sinopsis: "sigue al brillante neurocirujano japonés Kenzo Tenma, quien, tras salvar la vida de un joven llamado Johan, se ve envuelto en una serie de asesinatos seriales relacionados con su paciente. A medida que Tenma intenta descubrir la verdad, se enfrenta a un complejo laberinto moral y psicológico, cuestionando la naturaleza del bien y del mal.",
        imagen: "assets/monster.jpg",
        genero: "Thriller psicológico, Misterio",
        añoLanzamiento: "Año de lanzamiento: 2004 - 2005",
        episodios: "Número de episodios: 74",
        estudio: "Estudio: Madhouse",
    },
    sololeveling: {
        titulo: "Solo leveling",
        sinopsis: "sigue a Sung Jin-woo, el cazador más débil de la humanidad, quien tras una experiencia cercana a la muerte en una mazmorra, obtiene la habilidad de 'subir de nivel' a través de un sistema similar a un videojuego",
        imagen: "assets/solo leveling.jpg",
        genero: "Thriller psicológico, Misterio",
        añoLanzamiento: "Año de lanzamiento: 2023 - presente",
        episodios: "Número de episodios: 74",
        estudio: "Estudio: Madhouse",
    },
    slime: {
        titulo: "That Time I Got Reincarnated as a Slime",
        sinopsis: "sigue a Satoru Mikami, un oficinista de 37 años que es apuñalado y muere, para luego reencarnar en un mundo de fantasía como un slime con habilidades únicas.",
        imagen: "assets/slime.jpg",
        genero: "Isekai, Fantasía, Aventura",
        añoLanzamiento: "Año de lanzamiento: 2018 - Presente",
        episodios: "Número de episodios: Más de 50",
        estudio: "Estudio: Eight Bit",
    },
    chainsaw: {
        titulo: "Chainsaw Man",
        sinopsis: "narra la historia de Denji, un joven cazador de demonios que, tras ser traicionado y asesinado, se fusiona con su demonio mascota, Pochita, convirtiéndose en un híbrido humano-demonio con la capacidad de transformarse en Chainsaw Man.",
        imagen: "assets/chainsaw.jpg",
        genero: "Acción, shonen, sobrenatural",
        añoLanzamiento: "Año de lanzamiento: 2022",
        episodios: "Número de episodios: 12",
        estudio: "Estudio: Mappa",
    },
    diamond: {
        titulo: "Diamond no Ace",
        sinopsis: "es un anime de béisbol que sigue la historia de Eijun Sawamura, un lanzador con un estilo de juego único, quien se une a la prestigiosa escuela secundaria Seido para jugar béisbol y competir por el campeonato Koshien. La serie explora el viaje de Sawamura y sus compañeros de equipo mientras trabajan duro para mejorar, superar desafíos y fortalecer sus lazos, todo con el objetivo de alcanzar la cima del béisbol japonés. ",
        imagen: "assets/diamond no ace.jpg",
        genero: "Deportes, Drama, Comedia",
        añoLanzamiento: "Año de lanzamiento: 2013 - 2016",
        episodios: "Número de episodios: Más de 100",
        estudio: "Estudio: Madhouse",
    },
    LordMysteries: {
        titulo: "Lord of Mysteries",
        sinopsis: "El Señor de los Misterios (Lord of the Mysteries) es una novela web china que sigue la historia de Zhou Mingrui, quien se despierta en un mundo alternativo de la era victoriana como Klein Moretti. Este mundo, lleno de magia, misterios y horrores ocultos, combina elementos steampunk con horror lovecraftiano. Zhou, ahora Klein, debe navegar por un mundo donde la ciencia coexiste con la magia, desentrañando secretos y desarrollando poderes sobrenaturales como Beyonder, mientras se enfrenta a facciones religiosas y conspiraciones. Su objetivo principal es descubrir por qué transmigró y encontrar una manera de regresar a la Tierra.",
        imagen: "assets/lordofmyesteries.jpg",
        genero: "Misterio, fantasia, aventura",
        añoLanzamiento: "Año de lanzamiento: 2025",
        episodios: "Número de episodios: En emisión",
        estudio: "Estudio: desconocido",

    },
    Dandadan: {
        titulo: "Dandadan",
        sinopsis: "La historia sigue a Momo Ayase, quien cree en fantasmas pero no en extraterrestres, y a Ken Takakura, apodado 'Okarun' por Momo, quien cree en extraterrestres pero no en fantasmas. Para probar quién tiene razón, ambos visitan lugares asociados con lo paranormal y lo alienígena, descubriendo que ambos existen. Juntos, luchan contra entidades sobrenaturales y alienígenas, mientras desarrollan una peculiar amistad y lidian con la tensión romántica entre Momo y Okarun.",
        imagen: "assets/dandadan.jpg",
        genero: "Comedia, acción, sobrenatural, shonen",
        añoLanzamiento: "Año de lanzaminento: 2025",
        episodios: "Numero de episodios: en emisión",
        estudio: "Estudio: Mappa"
    }

}

const anime = animes[id];

if (anime) {
  document.getElementById('imagen-anime').setAttribute('src', anime.imagen);
  document.getElementById('genero').textContent = anime.genero;
  document.getElementById('año-lanzamiento').textContent = anime.añoLanzamiento;
  document.getElementById('episodios').textContent = anime.episodios 
  document.getElementById('estudio').textContent = anime.estudio 
  document.getElementById('titulo-anime').textContent = anime.titulo;
  document.getElementById('sinopsis').textContent = anime.sinopsis;

  document.title = anime.titulo + " - Mi sitio de animes";

  // Cambiar la etiqueta meta description
  const metaDescription = document.getElementById('meta-description');
  if (metaDescription) {
    metaDescription.setAttribute('content', anime.descripcion);
  }
} else {
  // Si no existe, redirigir o mostrar error
  document.body.innerHTML = "<h2>Anime no encontrado</h2>";
}