import "./section.css";
import ProjectCard from "../components/projectCard.jsx";
import { Container } from "react-bootstrap";

const projectCardContents = [
  {
    title: "Compiler",
  },
  {
    title: "title2",
  },
  {
    title: "titlethird",
  },
];

/**
 * Renders all project cards
 * @returns a list of <ProjectCard />
 */
const exportProjectCards = () => {
  return projectCardContents.map((content) => {
    return <ProjectCard title={content.title} orientation={"left"} />;
  });
};

/**
 * Default Component that renders all the project cards under a container
 */
const Projects = (props) => {
  return (
    <div id="projects" className="section-projects-jumbo">
      <Container>
        {/* <ProjectCard asdf={"hello"} test={"testing"} orientation={"left"} />
        <ProjectCard asdf={"hello"} test={"testing"} orientation={"left"} /> */}
        {exportProjectCards()}
      </Container>
    </div>
  );
};

export default Projects;
