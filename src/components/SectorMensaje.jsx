import "../style.css";
import Mensaje from "./Mensaje";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

function SectorMensaje() {
  const [personaje, setPersonaje] = useState({})
  
  useEffect(() => {
    consultarAPI();
  }, [])

  const consultarAPI = async() => {
    const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    const datos = await respuesta.json()
    setPersonaje(datos[0])
    console.log(datos)
  }

  return (
    <>
      <Mensaje personaje={personaje}></Mensaje>
      <Button variant="warning" onClick={consultarAPI} className="w-75 mx-auto my-4">
        Obtener frase
      </Button>
    </>
  );
}

export default SectorMensaje;
