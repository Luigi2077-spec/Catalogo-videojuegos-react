import { useState, useEffect } from 'react';
import Header from './components/Header';
import ListaItems from './components/ListaItems';
import DetalleItem from './components/DetalleItem';
import Footer from './components/Footer';

import imgZelda from './assets/zelda.jpg';
import imgElden from './assets/elden.jpg';
import imgCyberpunk from './assets/cyberpunk.jpg';

const JUEGOS_DATA = [
  {
    id: 1,
    nombre: "The Legend of Zelda: Tears of the Kingdom",
    imagen: imgZelda,
    descripcion: "Una épica aventura a través de la tierra y los cielos de Hyrule. Secuela directa de Breath of the Wild, donde la creatividad del jugador es el límite gracias a las nuevas habilidades de construcción.",
    categoria: "Aventura / RPG",
    plataforma: "Nintendo Switch",
    anio: 2023
  },
  {
    id: 2,
    nombre: "Elden Ring",
    imagen: imgElden,
    descripcion: "Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden. Explora las Tierras Intermedias en un vasto mundo abierto lleno de misterios, peligros y jefes colosales.",
    categoria: "Acción / RPG",
    plataforma: "PC, PS5, Xbox Series X/S",
    anio: 2022
  },
  {
    id: 3,
    nombre: "Cyberpunk 2077",
    imagen: imgCyberpunk,
    descripcion: "Un RPG de acción y aventura de mundo abierto ambientado en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Juegas como V, un mercenario proscrito.",
    categoria: "Ciencia Ficción / Shooter",
    plataforma: "PC, PS5, Xbox Series X/S",
    anio: 2020
  }
];

function App() {
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

  useEffect(() => {
    try {
      const juegoGuardado = localStorage.getItem('ultimoJuegoSeleccionado');
      if (juegoGuardado) {
        const juegoParsed = JSON.parse(juegoGuardado);
        // Emparejamos con los datos locales para asegurar que la ruta de la imagen funcione perfectamente
        const juegoActualizado = JUEGOS_DATA.find(j => j.id === juegoParsed.id);
        setJuegoSeleccionado(juegoActualizado || JUEGOS_DATA[0]);
      } else {
        setJuegoSeleccionado(JUEGOS_DATA[0]);
      }
    } catch (error) {
      console.error("Error al leer desde localStorage:", error);
    }
  }, []);

  const handleSeleccionarJuego = (juego) => {
    setJuegoSeleccionado(juego);
    try {
      localStorage.setItem('ultimoJuegoSeleccionado', JSON.stringify(juego));
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <Header />
      
      <main className="container my-5 flex-grow-1">
        <div className="row g-4">
          <div className="col-12 col-lg-7">
            <ListaItems 
              juegos={JUEGOS_DATA} 
              onSeleccionar={handleSeleccionarJuego} 
            />
          </div>
          
          <div className="col-12 col-lg-5">
            <DetalleItem juego={juegoSeleccionado} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;