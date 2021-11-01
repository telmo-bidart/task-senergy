import './App.css';
import { Link } from 'react-router-dom'

function Nav() {
  return (
   <nav>
       <div>
           <ul className="logo">
           <Link to="/">
         Gráfico
         </Link>
               <Link to="/contribuitors">
               <li>Contribuidores</li>
               </Link>
               <Link to ="/suport">
               <li>Suporte</li>
               </Link>
           </ul>
        </div>
   </nav>
  );
}

export default Nav;
