import { Link } from 'react-router-dom'

function Contatos() {
    return (
      <div>
       <h1>BEM VINDO A PAGINA == CONTATOS</h1><br/><br/>

       <Link to="/">Home</Link><br/><br/>
       <Link to="/Sobre">Sobre</Link>
      </div>
    );
  }
  
  export default Contatos;
  