import { 
    Container,
    Navbar,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function ServicosSelecionado(props) {

    function visivel() {
        return props.servicosSelecionado.length === 0 ? 'hidden' : 'mt-5';
    }

    function descricao() {
        return props.servicosSelecionado.length + ' Serviço(s) - Total: ' + props.servicosSelecionado.reduce((acumulado, servico) => acumulado + parseFloat(servico.valor), 0);
    }

    return ( 
        <div
            className={visivel()}>
            <Link to="/agendamento">
                <Navbar 
                    fixed="bottom" 
                    bg="danger" 
                    variant="dark" 
                    onClick="" >
                    <Container>
                        <Navbar.Brand 
                            href="/agendamento">
                                {descricao()}
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Link>
        </div>
     );
}

ServicosSelecionado.propTypes = {
    servicosSelecionado: PropTypes.array.isRequired,
}

export default ServicosSelecionado;