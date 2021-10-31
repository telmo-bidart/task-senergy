import './App.css';
import { Link } from 'react-router-dom'

function Variable() {
  return (
   <div>
       <h1>
           Escolha sua variável de interesse.
       </h1>
           <ul>
            <Link to="/chart">
               <li>Voltagem</li>
            </Link>
            <Link to="/chart2">
               <li>Corrente</li>
            </Link>
             <Link to ="/chart3">
               <li>Temperatura</li>
            </Link>
           </ul>
   </div>
  );
}

export default Variable;