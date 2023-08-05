import React from 'react';
import { useParams } from 'react-router-dom';


export default function Produto() {

    const { id } = useParams();
  return (
    <div>
      <h1>Informações do produto</h1>
      <span>
        Produto selecionado foi :{ id }
      </span>
    </div>
  );
}
