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
    // images: ["portfolio-appsrcmediaprojectImagesecommerceLanding.jpg"],
    images: ["ecommerceLanding.jpg"],
    tools: ["Java EE", "Spring Boot", "JPA", "React JSX"],
    url: "github.com",
  },
  {
    title: "GitHub Analyzer",
    subTitle: "Streams GitHub Repo Data & Analyzes",
    desc:
      "Retrieves GitHub public repository commit data " +
      "every 60 seconds, streams data over TCP to Spark. " +
      "Map Reduce algorithmn was used to reduce key, " +
      "value pairs to keep unique repo commits. " +
      "Flask web-app outputs spark data; that consists " +
      "of number of repos, top 10 most freq words etc",
    images: ["github_analyzer.png"],
    tools: ["pyspark", "flask", "HTML & CSS"],
    url: "github.com",
  },
  {
    title: "NeoExchange Bot",
    subTitle: "Notifies of new CDRs",
    desc:
      "Discord bot that scrapes NeoExchange Canadian " +
      "Depository Receipts. " +
      "Runs batch runs to notify all servers if any CDRs " +
      "are created along with showing closing, price, " +
      "change, trades and volume. " +
      "Data stored using Replit's key-value database",
    images: ["neohedge_bot.jpg"],
    tools: ["replit", "python", "pandas", "discord"],
    url: "github.com",
  },
  {
    title: ".... to be added 2023/06/30",
    subTitle: "For Measuring Quality of Testing",
    desc: "this is a description",
    images: ["ecommerceLanding.jpg"],
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
        images={content.images}
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
