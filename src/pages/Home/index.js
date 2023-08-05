import { Link } from 'react-router-dom'

function Home() {
    return (
      <div>
       <h1>BEM VINDO A PAGINA == HOME</h1><br/><br/>

       <Link to="/Sobre">Sobre</Link><br/><br/>
       <Link to="/Contatos">Contatos</Link>
      </div>
    );
  }
  
  export default Home;
  