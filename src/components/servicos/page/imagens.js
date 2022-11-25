import { 
    Carousel,
} from 'react-bootstrap';
import imagem1 from '../../../img/imagem1.jpg';
import imagem2 from '../../../img/imagem2.jpg';
import imagem3 from '../../../img/imagem3.jpg';
import imagem4 from '../../../img/imagem4.jpg';
import imagem5 from '../../../img/imagem5.jpg';

function Imagens() {
    return ( 
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagem1}
                    alt=""
                    style={{ 
                        maxHeight: '20rem' }} 
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagem2} 
                    alt=""
                    style={{
                        maxHeight: '20rem' }} 
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagem3} 
                    alt=""
                    style={{ 
                        maxHeight: '20rem' }} 
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagem4} 
                    alt=""
                    style={{ 
                        maxHeight: '20rem' }} 
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagem5} 
                    alt=""
                    style={{ 
                        maxHeight: '20rem' }}
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Imagens;