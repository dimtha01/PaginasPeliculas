import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./page/Inicio"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Tendencias from "./page/Tendencias"
import Categorias from "./page/Categorias"
import Detalles from "./page/Detalles"
import Peliculas from "./page/Peliculas"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Tendencias/:id" element={<Tendencias />} />
          <Route path="/Categorias/:id/:tipo" element={<Categorias />} />
          <Route path="/Detalle/:tipo/:id" element={<Detalles />} />
          <Route path="/peliculas/:id" element={<Peliculas />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App