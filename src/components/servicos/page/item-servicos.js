import {
    Card,
    Form,
    Row,
    Col,
    Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function ItemServicos(props) {

    function visivelAdd(estado) {
        return estado === 'S' ? '' : 'hidden';
    }

    function visivelRem(estado) {
        return estado === 'N' ? '' : 'hidden';
    }

    function handleAlterarServicos(event, servico){
        event.preventDefault();
        props.handleAdicionarServico(servico);
    }

    function handleRemoverServicos(event, servico){
        event.preventDefault();
        props.handleRemoverServico(servico);
    }

    return (
        props.servicos.map(servico => 
            <Card
                key={servico.id}
                style={{ 
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                    marginLeft: "5%",
                    marginRight: "5%", }} >
                <Card.Body>
                    <Form.Label
                        column
                        xs={9}>
                        {servico.descricao}
                    </Form.Label>
                    <Form.Label
                        column
                        xs={3}>
                        {servico.valor}
                    </Form.Label>
                    <Row
                        style={{  
                            marginTop: "0.5rem" }} >
                        <Col>
                            <div 
                                className={visivelAdd(servico.estado)}>
                                <Button 
                                    className='btn btn-primary w-20'
                                    onClick={(event) => handleAlterarServicos(event, servico)} >
                                    Reservar
                                </Button>
                            </div>
                            <div 
                                className={visivelRem(servico.estado)}>
                                <Button 
                                    className='btn btn-danger w-20'
                                    onClick={(event) => handleRemoverServicos(event, servico)} >
                                    Cancelar
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    );

}

ItemServicos.propTypes = {
    servicos: PropTypes.array.isRequired,
    handleAdicionarServico: PropTypes.func.isRequired,
    handleRemoverServico: PropTypes.func.isRequired,
}

export default ItemServicos;