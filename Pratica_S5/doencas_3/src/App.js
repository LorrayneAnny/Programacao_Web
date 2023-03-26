import Introducao from "./Componentes/Introducao";
import Formulario from "./Componentes/Formulario";
import Tabelas from "./Componentes/Tabelas";
import Imagens from "./Componentes/Imagens";
import Menu from "./Componentes/Menu";

import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Introducao/>}></Route>
            <Route path="/form" element={<Formulario/>}></Route>
            <Route path="/tabelas" element={<Tabelas/>}></Route>
            <Route path="/imagens" element={<Imagens/>}></Route>
            <Route path="/menu" element={<Menu/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
