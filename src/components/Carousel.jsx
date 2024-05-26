import Banner1 from "../assets/banner1.png";
import Banner2 from "../assets/banner2.png";
import Banner3 from "../assets/banner3.png";
const Carousel = () => {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Banner1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Godzilla y Kong: El nuevo imperio</h3>
              <p>Una aventura cinematográfica completamente nueva, que enfrentará al todopoderoso Kong y al temible Godzilla contra una colosal.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Kung Fu Panda 4</h3>
              <p>Po se prepara para ser el líder espiritual del Valle de la Paz, buscando un sucesor como Guerrero Dragón.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Dune Parte dos</h3>
              <p>Sigue el viaje mítico de Paul Atreides mientras se une a Chani y los Fremen en una guerra de venganza contra los conspiradores que destruyeron a su familia.
              </p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel