import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReceitas } from './api';

function ReceitaDetalhes() {
  const params = useParams();
  const id = parseInt(params.id); // Converte o ID para um número inteiro

  const [receita, setReceita] = useState(null);

  useEffect(() => {
    getReceitas().then((data) => {
      const found = data.find((r) => r.id === id);
      setReceita(found);
    });
  }, [id]);

  if (!receita) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{receita.titulo}</h1>
      <ul>
        {receita.ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      <p>{receita.modoPreparo}</p>
    </div>
  );
}

export default ReceitaDetalhes;
