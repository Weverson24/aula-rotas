import { Link } from 'react-router-dom'
import React from 'react';

import './style.css'



export default function Header() {
  return (
    <header>
        <h1>Minha pagina</h1>

        <div className='menu'>
            <Link to="/">Home</Link>
            <Link to="/Sobre">Sobre</Link>
            <Link to="/Contatos">Contatos</Link>
        </div>
    </header>
  );
}
