import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReceitasLista from './ReceitasLista';
import ReceitaDetalhes from './ReceitaDetalhes';
import AdicionarReceita from './AdicionarReceita';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/adicionar">Adicionar Receita</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ReceitasLista />} />
          <Route path="/receita/:id" element={<ReceitaDetalhes />} />
          <Route path="/adicionar" element={<AdicionarReceita />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
