import "../style.css";
import moe from "../img/moe.png";
import Mensaje from "./Mensaje";

function SectorMensaje() {
  return (
    <article className="container">
      <h2 className="text-center my-3">
        <b>Moe</b>
      </h2>
      <hr />
      <img src={moe} alt="moe" className="mx-auto d-block w-25 my-5" />
      <Mensaje></Mensaje>
    </article>
  );
}

export default SectorMensaje;
