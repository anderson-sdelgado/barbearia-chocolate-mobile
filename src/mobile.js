import './mobile.css';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';
import Inicial from './components/inicial/inicial';
import Servicos from './components/servicos/servicos';
import Agendamento from './components/agendamento/agendamento';
import Cliente from './components/cliente/cliente';

function Mobile() {

  const [servicosSelecionado, setServicosSelecionado] = useState([]);
  const [dia, setDia] = useState(0);
  const [horario, setHorario] = useState(0);

  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route 
            path="/" 
            element={<Inicial />} 
            exact />
          <Route 
            path="/servicos" 
            element={
              <Servicos 
                servicosSelecionado={servicosSelecionado}
                setServicosSelecionado={setServicosSelecionado}/>
            } 
            exact />
          <Route 
            path="/agendamento" 
            element={
              <Agendamento
                dia={dia}
                setDia={setDia}
                setHorario={setHorario} />
            } 
            exact />
          <Route 
            path="/cliente" 
            element={
              <Cliente
                servicosSelecionado={servicosSelecionado}
                dia={dia}
                horario={horario} />
            } 
            exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Mobile;
