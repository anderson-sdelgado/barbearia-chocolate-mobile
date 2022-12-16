import {
    useState,
    useEffect,
} from 'react';
import { 
    Container,
    Navbar,
} from 'react-bootstrap';
import ServicosSelecionado from './action/servicos-selecionado';
import Imagens from './page/imagens';
import ItemServicos from './page/item-servicos';
import * as constants from '../../utils/constants/constants';
import axios from 'axios';
import Servico from '../../models/servico.model'

function Servicos(props) {

    const URL_LISTAR_SERVICOS = constants.URL_BASE + constants.SERVICO;

    const [carregarServicos, setCarregarServicos] = useState(true);
    const [servicos, setServicos] = useState([]);
    const [adicionarServico, setAdicionarServico] = useState(false);
    const [removerServico, setRemoverServico] = useState(false);
    const [servico, setServico] = useState(new Servico());

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

        function addServico(){
            let listServ = servicos.map(serv => {
                if(serv.id === servico.id.toString()){
                    serv.estado = 'N';
                }
                return serv;
            });
            setServicos(listServ);
            props.servicosSelecionado.push(servico);
        }

        function remServico(){
            let listServ = servicos.map(serv => {
                if(serv.id === servico.id.toString()){
                    serv.estado = 'S';
                }
                return serv;
            });
            setServicos(listServ);
            props.setServicosSelecionado(props.servicosSelecionado.filter(s => s.id !== servico.id));
        }

        if(adicionarServico){
            addServico();
            setAdicionarServico(false);
        }

        if(removerServico){
            remServico();
            setRemoverServico(false);
        }

        if(carregarServicos){
            obterServicos();
            setCarregarServicos(false);
        }

    }, [carregarServicos, adicionarServico, removerServico,]);

    function handleAdicionarServico(servico){
        setServico(servico);
        setAdicionarServico(true);
    }

    function handleRemoverServico(servico){
        setServico(servico);
        setRemoverServico(true);
    }

    return ( 
        <div>
            <Imagens />
            <Navbar sticky="top" expand="sm" variant="light" bg="light">
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
            <div
                style={{ 
                    marginBottom: "4rem", }} >
                <ItemServicos 
                    servicos={servicos}
                    handleAdicionarServico={handleAdicionarServico}
                    handleRemoverServico={handleRemoverServico} />
            </div>
            <ServicosSelecionado
                servicosSelecionado={props.servicosSelecionado} />
        </div>
    );
}

ServicosSelecionado.propTypes = {
    servicosSelecionado: PropTypes.array.isRequired,
    setServicosSelecionado: PropTypes.func.isRequired,
}

export default Servicos;