import "./App.css";
import NavBar from "./components/NavBar";

import ImageCarousel from "./components/ImageCarousel";
import Cuerpo from "./components/Cuerpo";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";

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
              </>
            }
          />
          <Route path="/about" Component={AboutPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
