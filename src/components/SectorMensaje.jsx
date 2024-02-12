import "../style.css";
import Mensaje from "./Mensaje";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

function SectorMensaje() {
  const [personaje, setPersonaje] = useState({})
  const [mostrarSpinner, setMostrarSpinner] = useState(true)

  useEffect(() => {
    consultarAPI();
  }, [])

  const consultarAPI = async () => {
    setMostrarSpinner(true)
    try {
      const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      const datos = await respuesta.json()
      setPersonaje(datos[0])
      setMostrarSpinner(false)
      console.log(datos)
    } catch (error) {
      console.log(error)
    }
    setMostrarSpinner(false)
  }

  const mostrarComponente = mostrarSpinner ? (<><div className="text-center my-3"><Spinner></Spinner></div>
    <Button variant="warning" className="w-75 mx-auto my-4 disabled">
      Obtener frase
    </Button></>) : (<><Mensaje personaje={personaje}></Mensaje>
      <Button variant="warning" onClick={consultarAPI} className="w-75 mx-auto my-4">
        Obtener frase
      </Button></>);

  return (
    <div className="d-flex justify-content-center flex-column">
      {mostrarComponente}
    </div>
  );
}

export default SectorMensaje;
