import './section.css';
import ProjectCard from '../components/projectCard.jsx'

const Projects = (props) => {

    return (
        <div id="projects" className='section-projects-jumbo'>
            <h1>
                under construction as of 2022-05-04 <br />
                Project modals goes here {'<>'}
            </h1>
            <ProjectCard asdf={'hello'} test={'testing'}/>
        </div>
    )
}

export default Projects;