import "./section.css";
import ProjectCard from "../components/projectCard.jsx";
import { Container } from "react-bootstrap";

const projectCardContents = [
  {
    title: "Ecommerce Webpage",
    subTitle: "Multi-tier web application with user and admin views",
    desc: "this is a description",
    images: ["asdf"],
    tools: ["antlr4", "java", "html & css"],
    url: "github.com",
  },
  {
    title: "Compiler",
    subTitle: "For Measuring Quality of Testing",
    desc: "this is a description",
    images: ["asdf"],
    tools: ["antlr4", "java", "html & css"],
    url: "github.com",
  },
  {
    title: "Compiler",
    subTitle: "For Measuring Quality of Testing",
    desc: "this is a description",
    images: ["asdf"],
    tools: ["antlr4", "java", "html & css"],
    url: "github.com",
  },
];

/**
 * Renders all project cards
 * @returns a list of <ProjectCard />
 */
const exportProjectCards = () => {
  return projectCardContents.map((content) => {
    return (
      <ProjectCard
        title={content.title}
        subTitle={content.subTitle}
        desc={content.desc}
        orientation={"left"}
      />
    );
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
