import { Row, Col, Image } from 'react-bootstrap';
import { Button } from '@m7kra/react-utils';
import './Project.css';

type ProjectProps = {
    title: string;
    description: string;
    href: string;
    imageSrc: string;
};

export default function Project({ title, description, href, imageSrc }: ProjectProps) {
    return <Row className="project surface-variant">
        <Col xs={12} md={3} className="project-image">
            <Image src={imageSrc} fluid style={{ borderRadius: '10px' }} />
        </Col>
        <Col xs={12} md={5} className="project-description d-flex flex-column justify-content-center">
            <h1>{title}</h1>
            <p>{description}</p>
        </Col>
        <Col xs={12} md={4} className="project-button d-flex align-items-center justify-content-center">
            <a href={href}>
                <Button
                    shape="text"
                    initialColor="primary"
                    hoverColor="primary-container"
                    onClick={() => null}
                >
                    Explore
                </Button>
            </a>
        </Col>
    </Row>
}