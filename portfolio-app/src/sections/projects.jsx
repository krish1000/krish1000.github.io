import "./section.css";
import ProjectCard from "../components/projectCard.jsx";

const Projects = (props) => {
  return (
    <div id="projects" className="section-projects-jumbo">
      <ProjectCard asdf={"hello"} test={"testing"} orientation={"left"} />
      <ProjectCard asdf={"hello"} test={"testing"} orientation={"right"} />
    </div>
  );
};

export default Projects;
