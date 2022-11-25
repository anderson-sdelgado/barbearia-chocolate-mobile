import {
    Card,
    Form,
    Row,
    Col,
    Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function ItemServicos(props) {

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
                        sm={9}>
                        {servico.descricao}
                    </Form.Label>
                    <Form.Label
                        column
                        sm={3}>
                        {servico.valor}
                    </Form.Label>
                    <Row
                        style={{  
                            marginTop: "0.5rem" }} >
                        <Col>
                            <Button variant="primary" className="btn btn-primary w-20" >Reservar</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    );

}

ItemServicos.propTypes = {
    servicos: PropTypes.array.isRequired,
}

export default ItemServicos;