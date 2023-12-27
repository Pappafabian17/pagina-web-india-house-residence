import RedirectButton from "./RedirectButton";

export default function () {
  return (
    <div className="sobreNosotrosContainer">
      <div data-aos="flip-down">
        <h2 className="about-title">Sobre Nosotros</h2>
        <h3> India House Resistance</h3>

        <p>
          Nace a finales del 2020 como proyecto para crear una productora de
          eventos basados en la música electrónica y encuentros cannábicos. A
          raíz de la situación que se vivió en Argentina debido a la pandemia,
          la ciudad de Mar del Plata se vio afectada por restricciones horarias,
          lo cual afectó a muchos espacios donde los artistas desarrollaban su
          trabajo.
        </p>

        <p>
          Tomando los hechos como referencia, tuvimos la iniciativa, Eric Ariel
          Caponetto y yo, Norma Vanesa Gonzalia (GARIK & INDIA), de organizar
          eventos en formato underground. Al no haber permisos de reuniones
          sociales, esto se realizaba de modo incógnito debido a las
          restricciones mencionadas, sumadas al hecho de que el espacio era el
          salón de una casa. Todavía era bastante complicado... Éramos un
          pequeño grupo de artistas que solo queríamos trabajar y hacer lo que
          más nos gusta: "Música".
        </p>

        <p>
          Poco a poco se fueron sumando más amigos y amigas a los cuales les
          interesó la idea. Los eventos eran reuniones ya con cenas y cada vez
          más contenido, como shows visuales, artistas plásticos, bailarines,
          etc. A medida que fue pasando el tiempo, las restricciones ya no
          afectaban las reuniones sociales, lo que nos dio lugar a reunirnos de
          forma más pública, creando así de esa sala un espacio cultural, un
          lugar de desarrollo artístico.
        </p>
        <RedirectButton to="/contacto" text="Conoce mas sobre Nosotros!" />
      </div>
    </div>
  );
}
