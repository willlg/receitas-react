import React, { useState } from 'react';
import { addReceita } from './api';

function AdicionarReceita() {
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');
  const [adicionadaComSucesso, setAdicionadaComSucesso] = useState(false);

  const handleSubmit = () => {
    const novaReceita = {
      id: Date.now(),
      titulo,
      ingredientes: ingredientes.split(',').map((ing) => ing.trim()),
      modoPreparo,
    };

    addReceita(novaReceita);
    setAdicionadaComSucesso(true);
    // Limpa os campos após a adição
    setTitulo('');
    setIngredientes('');
    setModoPreparo('');
  };

  return (
    <div>
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
      />
      <input
        value={ingredientes}
        onChange={(e) => setIngredientes(e.target.value)}
        placeholder="Ingredientes (separados por vírgulas)"
      />
      <textarea
        value={modoPreparo}
        onChange={(e) => setModoPreparo(e.target.value)}
        placeholder="Modo de Preparo"
      />
      <button onClick={handleSubmit}>Adicionar</button>
      
      {adicionadaComSucesso && <p>Receita adicionada com sucesso!</p>}
    </div>
  );
}

export default AdicionarReceita;
