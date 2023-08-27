import { Header, Cover } from '@m7kra/react-utils';
import Project from './Components/Project/Project';
import { Image, Container } from 'react-bootstrap';
import logo from './logo.jpg';
import logoDark from './dark.png';
import logoLight from './light.png';
import musiclyImage from './Images/musicly.png';
import typexImage from './Images/typex.png';
import sudokuImage from './Images/sudoku.png';
import periodicImage from './Images/periodic.png';
import picsImage from './Images/pics.png';
import './App.css';

export default function App() {
    return <div id="app">
        <Header
            title="M7kra"
            logoLight={
                <Image src={logoDark} fluid />
            }
            logoDark={
                <Image src={logoLight} fluid />
            }
            github="https://github.com/m7kra"
        />
        <Cover
            logo={
                <Image src={logo} fluid style={{ borderRadius: '50%' }} />
            }
            title="M7kra"
            description="I love computers because they let me unleash my inner bug-maker. Sometimes I even fix those bugs :)"
            email="luiswbarbosa@gmail.com"
        />
        <Container className='p-4'>
            <Project
                title="Musicly"
                description="A simple and elegant music player which is cross-platform and open-source. Musicly was built using React and Electron."
                href="https://m7kra.github.io/Musicly"
                imageSrc={musiclyImage}
            />
            <Project
                title="TypeX"
                description="Improve your typing speed"
                href="https://m7kra.github.io/TypeX"
                imageSrc={typexImage}
            />
            <Project
                title="Sudoku"
                description="An experience with constraints and backtracking"
                href="https://github.com/m7kra/sudoku"
                imageSrc={sudokuImage}
            />
            <Project
                title="Periodic"
                description="I needed to practice my periodic table of elements knowledge. I could have choosen a few random elements. Instead, I wound up programming a whole website to do it, which took me a little more :)"
                href="https://m7kra.github.io/periodic"
                imageSrc={periodicImage}
            />
            <Project
                title="Pics"
                description="Some of my favorite shots. Why not?"
                href="https://m7kra.github.io/pics"
                imageSrc={picsImage}
            />
        </Container>
        <div className="vertical-spacer-100" />
    </div>
}
