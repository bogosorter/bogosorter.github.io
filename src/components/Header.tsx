import { Container, Navbar, Nav } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';
import './Header.css';

export default function Header() {
    return <Navbar
        data-bs-theme='light'
        fixed='top'
        id='header'
        className='surface'
    >
        <Container fluid>
            <Navbar.Brand href='https://bogosorter.github.io'>
                bogosorter
            </Navbar.Brand>
            <Nav className='w-100' />
            <div id='github-container'>
                <a href="https://github.com/bogosorter/">
                    <Github size={30}/>
                </a>
            </div>
        </Container>
    </Navbar>
}
