import { Header, Cover } from '@m7kra/react-utils';
import Project from './Components/Project/Project';
import { Image, Container } from 'react-bootstrap';
import logo from './logo.jpg';
import elementaryImage from './Images/elementary.png';
import musiclyImage from './Images/musicly.png';
import typexImage from './Images/typex.png';
import sudokuImage from './Images/sudoku.png';
import periodicImage from './Images/periodic.png';
import mikraImage from './Images/mikra.png';
import flowImage from './Images/flow.png';
import './App.css';

export default function App() {
    return <div id="app">
        <Header
            title="bogosorter"
            github="https://github.com/bogosorter"
        />
        <Cover
            logo={
                <Image src={logo} fluid style={{ borderRadius: '50%' }} />
            }
            title="bogosorter"
            description="I use computers mainly to create bugs. Sometimes I even fix them."
            email="luiswbarbosa@gmail.com"
        />
        <Container className='p-4'>
            <Project
                title="bogothoughts"
                description="A cross between a blog and a photo gallery, bogothoughts is a place for whatever comes to mind."
                href="https://bogosorter.github.io/blog"
                imageSrc={mikraImage}
            />
            <Project
                title="Elementary"
                description="A simple and elegant markdown editor."
                href="https://bogosorter.github.io/elementary"
                imageSrc={elementaryImage}
            />
            <Project
                title="Musicly"
                description="A simple and elegant music player that is cross-platform and open-source. Musicly was built using React and Electron."
                href="https://bogosorter.github.io/Musicly"
                imageSrc={musiclyImage}
            />
            <Project
                title="FlowFields"
                description="bogosorter's hidden talent for art (and plagiarism)"
                href="https://bogosorter.github.io/flow"
                imageSrc={flowImage}
            />
            <Project
                title="TypeX"
                description="Improve your typing speed"
                href="https://bogosorter.github.io/TypeX"
                imageSrc={typexImage}
            />
            <Project
                title="Sudoku"
                description="An experience with constraints and backtracking"
                href="https://github.com/bogosorter/sudoku"
                imageSrc={sudokuImage}
            />
            <Project
                title="Periodic"
                description="I needed to practice my periodic table of elements knowledge. I could have choosen a few random elements. Instead, I wound up programming a whole website to do it, which took me a little more :)"
                href="https://bogosorter.github.io/periodic"
                imageSrc={periodicImage}
            />
        </Container>
        <div className="vertical-spacer-100" />
    </div>
}
