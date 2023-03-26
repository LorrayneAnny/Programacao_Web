import Introducao from "./Componentes/Introducao";
import Formulario from "./Componentes/Formulario";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Introducao/>}></Route>
            <Route path="/form" element={<Formulario/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
