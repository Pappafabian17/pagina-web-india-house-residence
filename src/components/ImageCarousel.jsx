import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ImageCarousel() {
  const carouselStyle = {
    maxHeight: "70vh",
  };

  return (
    <div className="carouse-container h-50">
      <Carousel style={carouselStyle}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/img/fiesta1.jpg"
            alt="Primera diapositiva"
            style={{ maxHeight: "70vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            {/* <h3>Primera diapositiva</h3>
            <p>Descripción de la primera diapositiva.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/img/fiesta2.jpg"
            alt="Segunda diapositiva"
            style={{ maxHeight: "70vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            {/* <h3>Segunda diapositiva</h3>
            <p>Descripción de la segunda diapositiva.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/img/fiesta3.jpg"
            alt="Segunda diapositiva"
            style={{ maxHeight: "70vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            {/* <h3>Segunda diapositiva</h3>
            <p>Descripción de la segunda diapositiva.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        {/* Agrega más elementos de Carousel.Item según sea necesario */}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
