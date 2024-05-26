import { Link } from "react-router-dom";
import Logo from "../assets/d_g-removebg-preview.png"
import FilitroGenerosDeTv from "./FilitroGenerosDeTv";
import FiltroGenerosCine from "./FiltroGenerosCine";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={Logo} alt="logo" width={45} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/tendencias/recientes" className="nav-link" href="#">Tendecias</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Generos De Tv
                </a>
                <ul className="dropdown-menu">
                  <FilitroGenerosDeTv />
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Generos De Cine
                </a>
                <ul className="dropdown-menu">
                  <FiltroGenerosCine />
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header