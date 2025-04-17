import { Container, Row, Col } from 'react-bootstrap';
import mikra from '../images/mikra.png';
import './Cover.css';

export default function Cover() {
    return (
        <section id='cover'>
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col md={10} className='d-flex flex-column align-items-start justify-content-center d-md-block d-none'>
                        <h1 id='cover-title'>bogosorter</h1>
                        <p id='cover-description'>I use computers mainly to create bugs. Sometimes I even fix them.</p>
                    </Col>
                    <Col sm={11} className='d-flex flex-column align-items-start justify-content-center d-md-none d-block'>
                        <h1 id='cover-title-small'>bogosorter</h1>
                        <p id='cover-description-small'>I use computers mainly to create bugs. Sometimes I even fix them.</p>
                    </Col>
                </Row>
            </Container>
            <img src={mikra} alt='' id='cover-image' />
        </section>
    )
}
