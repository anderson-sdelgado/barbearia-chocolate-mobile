import {
    useState,
    useEffect,
} from 'react';
import { 
    Container,
    Navbar,
} from 'react-bootstrap';
import Imagens from './page/imagens';
import ItemServicos from './page/item-servicos';
import * as constants from '../../utils/constants/constants';
import axios from 'axios';

function Servicos() {

    const URL_LISTAR_SERVICOS = constants.URL_BASE + constants.SERVICO;

    const [carregarServicos, setCarregarServicos] = useState(true);
    const [servicos, setServicos] = useState([]);

    useEffect(() => {

        async function obterServicos(){
            try{

                let { data } = await axios.get(URL_LISTAR_SERVICOS);
                if(data.status==='success'){
                    setServicos(data.data);
                }
            } catch(err){

            }
        }

        if(carregarServicos){
            obterServicos();
            setCarregarServicos(false);
        }
    }, [carregarServicos]);

    return ( 
        <div>
            <Imagens />
            <Navbar sticky="top" expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand>Barbearia Chocolate</Navbar.Brand>
                </Container>
            </Navbar>
            <span
                style={{ 
                    marginLeft: "5%",}} >
                Rua Teste, Tabatinga
            </span>
            <h2 
                style={{ 
                    marginTop: "1rem",
                    marginLeft: "5%", }} >
                Serviços
            </h2>
            <ItemServicos 
                servicos={servicos} />
            {/* <Navbar fixed="bottom" bg="danger" variant="dark">
                <Container>
                <Navbar.Brand href="/agendamento">1 Serviço - Reservado</Navbar.Brand>
                </Container>
            </Navbar> */}
        </div>
    );
}

export default Servicos;