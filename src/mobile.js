import './barbearia-chocolate-mobile.css';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';
import Inicial from './components/inicial/inicial';

function BarbeariaChocolateMobile() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Inicial />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default BarbeariaChocolateMobile;
