import {
    useEffect,
    useState,
} from 'react';
import { 
    Container,
} from 'react-bootstrap';
import Calendario from './page/calendario';
import Horario from './page/horario';
import * as constants from '../../utils/constants/constants';
import axios from 'axios';

function Agendamento() {

    const URL_LISTAR_HORARIOS = constants.URL_BASE + constants.HORARIOS;

    const [carregarAgenda, setCarregarAgenda] = useState(true);
    const [mes, setMes] = useState('');
    const [datas, setDatas] = useState([]);
    const [diaSemana, setDiaSemana] = useState(0);
    const [alterarDia, setAlterarDia] = useState(false);
    const [diaSelecionado, setDiaSelecionado] = useState(0);
    const [horarios, setHorarios] = useState([]);

    useEffect(() => {

        function obterAgenda(){

            var dataAtualLong = Date.now();
            var dataAtual = new Date(dataAtualLong);
            var mesesList = new Array ("JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO")
            setMes(mesesList[dataAtual.getMonth() - 1]);
            var diaSemana = dataAtual.getDay();
            const rows = [];
            for (let i = 0; i < 21; i++) {
                rows.push(dataAtualLong - diaSemana * 24 * 60 * 60 * 1000);
                diaSemana--;
            }
            setDatas(rows);
        }

        function setValorDiaAtual(){
            var dataAtualLong = Date.now();
            var dataAtual = new Date(dataAtualLong);
            props.setDia(dataAtual.getDate());
            setDiaSemana(dataAtual.getDay());
        }

        function setValorDia(){
            var data = new Date(diaSelecionado);
            props.setDia(data.getDate());
            setDiaSemana(data.getDay());
        }

        async function obterHorarios(){
            try{
                let { data } = await axios.get(URL_LISTAR_HORARIOS);
                console.log("Valor");
                console.log(data);
                if(data.status==='success'){
                    setHorarios(data.data);
                } else {
                    setHorarios([]);
                }
            } catch(err){
                setHorarios([]);
            }
        }

        if(carregarAgenda){
            obterAgenda();
            obterHorarios();
            setValorDiaAtual();
            setCarregarAgenda(false);
        }

        if(alterarDia){
            obterAgenda();
            obterHorarios();
            setValorDia();
            setAlterarDia(false);
        }

    }, [carregarAgenda, alterarDia]);

    return ( 
        <div>
            <Container 
                fluid="md" >
                <Calendario
                    dia={props.dia}
                    mes={mes}
                    datas={datas}
                    setAlterarDia={setAlterarDia}
                    setDiaSelecionado={setDiaSelecionado}/>
                <Horario 
                    diaSemana={diaSemana}
                    horarios={horarios}
                    setHorario={props.setHorario} />
            </Container>
        </div> 
    );
}

Agendamento.propTypes = {
    dia: PropTypes.number.isRequired,
    setDia: PropTypes.func.isRequired,
    setHorario: PropTypes.func.isRequired,
}

export default Agendamento;