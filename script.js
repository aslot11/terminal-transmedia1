// data.js o dentro de tu <script>
const franquicias = [
  {
    id: 'fnaf',
    titulo: 'Five Nights at Freddy\'s',
    fondo: 'url_del_fondo_fnaf.jpg',
    botones: [
      { texto: 'Videojuegos (PC/Consola)', accion: 'Mecánica de 8-bits y lore oculto.' },
      { texto: 'Trilogía The Silver Eyes', accion: 'Identidad humana de W. Afton.' },
      { texto: 'Película', accion: 'Adaptación de personajes al Live Action.' }
    ]
  },
  {
    id: 'inazuma',
    titulo: 'Inazuma Eleven',
    fondo: 'url_del_fondo_inazuma.jpg',
    botones: [
      { texto: 'Videojuego (Nintendo DS)', accion: 'Reclutamiento y gestión táctica.' },
      { texto: 'Anime', accion: 'Desarrollo emocional del equipo.' },
      { texto: 'Largometrajes', accion: 'Enlaces de líneas temporales.' }
    ]
  }
  // Añadir el resto de las 10 franquicias aquí...
];

function cargarFranquicia(id) {
  const data = franquicias.find(f => f.id === id);
  
  // Cambiar fondo y título
  document.getElementById('pantalla-principal').style.backgroundImage = `url(${data.fondo})`;
  document.getElementById('titulo-franquicia').innerText = data.titulo;
  
  // Limpiar y cargar los 3 botones específicos
  const contenedorBotones = document.getElementById('contenedor-botones');
  contenedorBotones.innerHTML = '';
  
  data.botones.forEach(boton => {
    const btnElement = document.createElement('button');
    btnElement.className = 'btn-retro';
    btnElement.innerText = boton.texto;
    // Al hacer clic o hover, revela la acción breve y directa
    btnElement.onclick = () => alert(boton.accion); // Aquí puedes cambiar el alert por un tooltip estilizado
    contenedorBotones.appendChild(btnElement);
  });
}
