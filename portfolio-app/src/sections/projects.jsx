import "./section.css";
import ProjectCard from "../components/projectCard.jsx";
import { Container } from "react-bootstrap";
// import { S } from "react-icons/si";

const projectCardContents = [
  {
    title: "Ecommerce Webpage",
    subTitle: "Multi-tier web application with user and admin views",
    desc:
      "Deployed on AWS Elastic Beanstalk. " +
      "Allows customers to register, filter products, " +
      "manage items in a shopping cart, check out " +
      "products and add reviews. " +
      "Admins have a personalized view that shows all " +
      "user events and transactions. ",
    images: ["portfolio-appsrcmediaprojectImagesecommerceLanding.jpg"],
    tools: ["Java EE", "SpringBoot", "JPA", "React JSX"],
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
        tools={content.tools}
        url={content.url}
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
