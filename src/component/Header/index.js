import './Header.css';
import { Link } from 'react-router-dom';


function Header (){
    return(
        <header>
            <Link className="logo" to="/">Prime <span className="flix">flix</span></Link>
            <Link className="favoritos" to="/favoritos">Favoritos</Link>
        </header>
    )
}

export default Header;