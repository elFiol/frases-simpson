import "../style.css";

function Mensaje({ personaje }) {
  return (
    <article className="container">
      <h2 className="text-center my-3">
        <b>{personaje.character}</b>
      </h2>
      <hr />
      <img src={personaje.image} alt={personaje.character} className="mx-auto d-block w-25 my-5" />
      <div id="mensaje" className="py-3 mb-4 container">
        <p>
          <b>
            {personaje.quote}
          </b>
        </p>
        <p>
          <i>~{personaje.character}</i>
        </p>
      </div>
    </article>
  );
}

export default Mensaje;
