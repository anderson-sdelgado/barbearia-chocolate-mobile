import './mobile.css';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';
import Inicial from './components/inicial/inicial';
import Servicos from './components/servicos/servicos';

function Mobile() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Inicial />} exact />
          <Route path="/servicos" element={<Servicos />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Mobile;
