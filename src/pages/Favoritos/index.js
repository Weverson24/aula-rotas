import React from 'react';
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'

import './Favoritos.css'


export default function Favoritos() {
    const [filmes ,setFilmes] = useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@primeFlix")
        setFilmes(JSON.parse(minhaLista) || [])

    },[])

    function excluitFavoritos(id){
        let filterFavorito = filmes.filter((item) => {
            return (item.id !== id)
        })
        setFilmes(filterFavorito);
        localStorage.setItem("@primeFlix",JSON.stringify(filterFavorito))
        toast.success("Filme removido com sucesso")
    }


  return (
    <div className='meus-filmes'>
      <h1>Meus favoritos</h1>
      {filmes.length === 0 && <pan>Você não possui nenhum filme salvo :( </pan> }
      <ul>
        {filmes.map((filme)=> {
            return(
                <li key={filme.id}>
                    <span>{filme.title}</span>
                    <div>
                        <Link to={`/filme/${filme.id}`} >Ver detalhes</Link>
                        <button onClick={()=> excluitFavoritos(filme.id)}>Excluir</button>
                    </div>
                </li>
            )
        })}
      </ul>
    </div>
  );
}
