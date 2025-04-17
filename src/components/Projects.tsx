import './Projects.css';
import mikra from '../images/mikra.png';
import elementary from '../images/elementary.png';
import musicly from '../images/musicly.png';
import flow from '../images/flow.png';
import typex from '../images/typex.png';

export default function Projects() {

    const projects = [
        {
            name: 'bogothoughts',
            image: mikra,
            url: 'https://bogosorter.github.io/blog/'
        }, {
            name: 'Elementary',
            image: elementary,
            url: 'https://bogosorter.github.io/elementary'
        }, {
            name: 'Musicly',
            image: musicly,
            url: 'https://bogosorter.github.io/Musicly'
        }, {
            name: 'Flowfields',
            image: flow,
            url: 'https://bogosorter.github.io/flow'
        }, {
            name: 'TypeX',
            image: typex,
            url: 'https://bogosorter.github.io/TypeX'
        }
    ];

    return <section id='projects'>
        {projects.map(project => <a href={project.url}>
            <article className='project'>
                <img src={project.image} alt='' />
                <h1>{project.name}</h1>
            </article>
        </a>)}
    </section>
}