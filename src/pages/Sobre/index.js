import { Link } from 'react-router-dom'

function Sobre() {
    return (
      <div>
       <h1>BEM VINDO A PAGINA == SOBRE</h1><br/><br/>

       <Link to="/">Home</Link><br/><br/>
       <Link to="/Contatos">Contatos</Link>
      </div>
    );
  }
  
  export default Sobre;
  