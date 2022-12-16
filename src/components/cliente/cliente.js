import { 
    Form, 
    Button, 
} from 'react-bootstrap';

function Cliente() {
    return ( 
        <Form>
            <Form.Group 
                className="m-3">
                <Form.Label>
                    Dia {props.dia}
                </Form.Label>
                <Form.Label>
                    Horario {props.horario}
                </Form.Label>
            </Form.Group>
            <Form.Group 
                className="m-3">
                <Form.Label>
                    Serviço(s) - Total: {props.servicosSelecionado.reduce((acumulado, servico) => acumulado + parseFloat(servico.valor), 0)}
                </Form.Label>
            </Form.Group>
            <Form.Group 
                className="m-3">
                <Form.Label>
                    Nome Completo
                </Form.Label>
                <Form.Control type="text" placeholder="Por favor, digite o seu nome completo nesse campo." />
            </Form.Group>
            <Form.Group 
                className="m-3">
                <Form.Label>
                    Celular
                </Form.Label>
                <Form.Control type="text" placeholder="Por favor, digite o numero do celular nesse campo." />
            </Form.Group>
            <Button 
                className="m-3" 
                variant="primary" 
                type="submit" >
                Submit
            </Button>
        </Form>
    );
}

Cliente.propTypes = {
    servicosSelecionado: PropTypes.array.isRequired,
    dia: PropTypes.number.isRequired,
    horario: PropTypes.number.isRequired,
}

export default Cliente;