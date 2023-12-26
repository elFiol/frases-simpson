import simpson from './img/The_Simpsons_yellow_logo.svg.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return <section className="container d-flex justify-content-center">
    <img src={simpson} alt="hola" className='w-50 my-5 mx-auto d-block'/>
  </section>
}

export default App
