import './App.css';
import  Home  from './components/Home';
import Sobre from './components/Sobre';
import Aluno from './components/Alunos';
import { BrowserRouter , Routes , Route , Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav variant="tabs">
          <Nav.Link as={Link} to="/">Pagina inicial</Nav.Link>
          <Nav.Link as={Link} to="/alunos">Cadastro de alunos</Nav.Link>
          <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
        </Nav>

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
