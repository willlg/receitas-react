import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getReceitas } from './api';

function ReceitasLista() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    getReceitas().then((data) => {
      setReceitas(data);
    });
  }, []);

  return (
    <div>
      <ul>
        {receitas.map((receita) => (
          <li key={receita.id}>
            <Link to={`/receita/${receita.id}`}>{receita.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReceitasLista;
