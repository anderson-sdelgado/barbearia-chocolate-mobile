import logo from '../../img/logo.jpg';
import { 
    Image
    , Form
    , Button
} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Inicial() {
    return ( 
        <div
            style={{ background: 'black'  }}>
            <Image 
                src={logo} 
                className={'padrao'}
                style={{ 
                    marginTop: "2rem",}}
                />
            <Link to="/servicos"
                className="btn btn-outline-light padrao"
                style={{ 
                    heigth: "2rem",
                    marginTop: "1.5rem", 
                    marginBottom: "1rem",
                    fontSize: "1.2rem"}} >
                Continuar
            </Link>
        </div>
    );
}

export default Inicial;