import simpson from './img/The_Simpsons_yellow_logo.svg.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

function App() {
  return <section className="container d-flex flex-column justify-content-center">
    <img src={simpson} alt="hola" className='w-50 my-5 mx-auto d-block'/>
    <Button variant='warning' className='w-75 mx-auto'>Obtener frase</Button>
  </section>
}

export default App
