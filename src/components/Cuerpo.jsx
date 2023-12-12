import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Cuerpo() {
  useEffect(() => {
    AOS.init(); // Inicializa AOS
  }, []);
  return (
    <>
      <div className="cuerpo-container">
        <div className="section-1">
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="descripcion"
          >
            Somos la Resistance of Culture, único centro cultural en Argentina,
            destinado a la difusión y creación de música electrónica. Aquí
            fomentamos la cultura electrónica desde lo más profundo de los
            sonidos.
          </p>
          <img src="../../assets/img/logo2.png" className="image-cuerpo" />
        </div>
        <div className="section-1 reverse">
          <p
            className="descripcion"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Nosotros somos un grupo de Artistas Locales nacionales e
            internacionales que apuntamos a la Música Electrónica. Fomentamos
            dentro de ese género un ambiente cultural basado en el desarrollo de
            la música como medio de comunicación. Creamos eventos sociales donde
            expresar el arte y dejamos un mensaje cultural, tanto desde el valor
            de la música como desde la gastronomía.
          </p>
          <img
            src="../../assets/img/concept-mooving.png"
            className="image-cuerpo"
          />
        </div>
        <div className="section-1">
          <p
            className="descripcion"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Nos enfocamos en la creación de contenidos para el público, basados
            en la historia de la música. También nos concentramos en la
            promoción de artistas, mostrando su contenido y material, y
            exponiendo herramientas para que puedan crecer de manera
            independiente, ya que la mayoría no cuenta con representación de
            managers. En cuanto a la gastronomía que promovemos, está basada en
            la cultura cannábica. Planeamos incluir cenas o almuerzos en los
            eventos, con platos elaborados por personas capacitadas para ese
            tipo de cocina, que son platos de autor.
          </p>
          <img src="../../assets/img/lentes.png" className="image-cuerpo" />
        </div>
      </div>
    </>
  );
}
