import { Link45deg } from 'react-bootstrap-icons';
import './Projects.css';

export default function Projects() {

    const projects = [
        {
            name: 'bogothoughts',
            description: 'A cross between a blog and a photo gallery, bogothoughts is a place for whatever comes to mind',
            url: 'https://bogosorter.github.io/blog/'
        }, {
            name: 'elementary',
            description: 'A simple and elegant markdown editor',
            url: 'https://bogosorter.github.io/elementary'
        }, {
            name: 'musicly',
            description: 'A simple and elegant open-source music player',
            url: 'https://bogosorter.github.io/Musicly'
        }, {
            name: 'caracol',
            description: 'My very own slow raytracer',
            url: 'https://github.com/bogosorter/caracol'
        }, {
            name: 'bogosat',
            description: 'A toy SAT solver that uses gradient ascent',
            url: 'https://github.com/bogosorter/bogosat'
        }, {
            name: 'flowfields',
            description: 'bogosorter\'s hidden talent for art (and plagiarism)',
            url: 'https://bogosorter.github.io/flow'
        }, {
            name: 'typex',
            description: 'A website to help you type faster.',
            url: 'https://bogosorter.github.io/TypeX'
        }, {
            name: 'colors',
            description: 'bogosorter\'s favorite color palette',
            url: 'https://bogosorter.github.io/colors'
        }, {
            name: 'periodic',
            description: 'A relic from the time I had Chemistry',
            url: 'https://bogosorter.github.io/periodic/'
        }
    ];

    return <section id='projects'>
        {projects.map(project => <a href={project.url}>
            <article className='project'>
                <h1><Link45deg /> {project.name}</h1>
                <p>{project.description}</p>
            </article>
        </a>)}
    </section>
}
