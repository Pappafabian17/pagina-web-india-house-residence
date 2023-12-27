import "./App.css";
import NavBar from "./components/NavBar";

import ImageCarousel from "./components/ImageCarousel";
import Cuerpo from "./components/Cuerpo";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import SoundcloudPlayer from "./components/SoundcloudPlayer";
import Card from "./components/Card";
import Colaboradores from "./components/Colaboradores";
import Contacto from "./components/Contacto";
import Eventos from "./components/Eventos";

function App() {
  return (
    <Router>
      <div className="main-container">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ImageCarousel />
                <Cuerpo />
                <About />
                <SoundcloudPlayer />
              </>
            }
          />
          <Route path="/about" Component={AboutPage} />
          <Route path="/colaboradores" Component={Colaboradores} />
          <Route path="/contacto" Component={Contacto} />
          <Route path="/eventos" Component={Eventos} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
