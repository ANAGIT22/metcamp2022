import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "../../components/QuestionCard"

const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game () {
    const [loading, setLoading ] = useState(true);
    const [questions, setQuestions] = useState([]);
// quiero que llame a las preguntas cuando la persona entre al  Juego.
useEffect(() => {
    
    fetch(API_URL) 
    .then(response => response.json())
    .then(data => setQuestions(data)) // recibe los datos de la Api
    .catch(error => console.log(error)) // solo va a ejecurase si hay un error
    .finally (() => setLoading (false)) // finalmente termina de cargar.



}, [])

    return (
        <div className="container">
            <section className="section">
            <nav className="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li>
        <Link to ="/">Inicio</Link>
    </li>
    <li className="is-active">
        <Link to = "/game">Juego</Link>

    </li>
    
    
  </ul>
</nav>
{
    loading && 
        <div>Cargando...</div>
    

}
{
    !loading && (
        <form>
       {
    
         questions.map ((pregunta)   => {
            return <QuestionCard key={pregunta.id} preguntaActual = {pregunta} />

           
         })
        }

  </form>
    )
}
<h1>El Juego</h1>
            </section>
        </div>

        
    )
    
}
export default Game;
