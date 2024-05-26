import Carousel from "../components/Carousel"
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const APIPelTendenciasCine = 'https://api.themoviedb.org/3/trending/movie/day?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';
const Inicio = () => {
  const [datos, setDatos] = useState([]);
  const getDatos = async () => {
    try {
      const response = await fetch(APIPelTendenciasCine);
      const data = await response.json();
      //console.log(data);
      setDatos(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDatos();
  }, []);
  let tipo = "cine";
  const ruta = "https://image.tmdb.org/t/p/w500";
  /* const rutaDetalle = "/detalle/" */
  return (
    <>
      <Carousel />
      <h3 className="text-center py-5 text-white">Tendemcia en el Cine</h3>
      <div className="container">
        <div className="row">
          {datos && datos.map((pelicula) => (
            <Card key={pelicula.id} pelicula={pelicula} tipo={tipo} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Inicio