import "./section.css";
import ProjectCard from "../components/projectCard.jsx";
import { Container } from "react-bootstrap";

const Projects = (props) => {
  return (
    <div id="projects" className="section-projects-jumbo">
      <Container>
        <ProjectCard asdf={"hello"} test={"testing"} orientation={"left"} />
        <ProjectCard asdf={"hello"} test={"testing"} orientation={"left"} />
      </Container>
    </div>
  );
};

export default Projects;
