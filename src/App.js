import './App.css';
import  Home  from './components/Home';
import Sobre from './components/Sobre';
import Aluno from './components/Alunos';
import { BrowserRouter , Routes , Route , Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to="/">Pagina inicial</Link></li>
          <li><Link to="/alunos">Cadastro de alunos</Link></li>
          <li><Link to="/sobre">Sobre </Link></li>
        </ul>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alunos" element={<Aluno />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>  

    </div>
  );
}

export default App;
