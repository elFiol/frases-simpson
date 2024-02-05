import "../style.css";
import moe from "../img/moe.png";
import Mensaje from "./Mensaje";
import { Button } from "react-bootstrap";

function SectorMensaje() {
  return (
    <>
      <article className="container">
        <h2 className="text-center my-3">
          <b>Moe</b>
        </h2>
        <hr />
        <img src={moe} alt="moe" className="mx-auto d-block w-25 my-5" />
        <Mensaje></Mensaje>
      </article>
      <Button variant="warning" className="w-75 mx-auto my-4">
        Obtener frase
      </Button>
    </>
  );
}

export default SectorMensaje;
