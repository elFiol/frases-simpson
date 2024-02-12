import simpson from "./img/The_Simpsons_yellow_logo.svg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import SectorMensaje from "./components/SectorMensaje";

function App() {
  return (
    <section className="container d-flex flex-column justify-content-center">
      <img src={simpson} alt="hola" className="w-50 my-5 mx-auto d-block" />
      <SectorMensaje></SectorMensaje>
    </section>
  );
}

export default App;
