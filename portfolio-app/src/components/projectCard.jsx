// import './section.css';
import { Card, Row, Col } from "react-bootstrap";
import { SiGithub } from "react-icons/si";

const ProjectCard = (props) => {
  console.log(props);

  let left = "left";

  return (
    <div
      style={{
        width: "80%",
        marginTop: "30px",
        // alignItems: "normal",
        // alignContent: "normal",
        textAlign: "left",
      }}
    >
      <Card
        style={{
          //   paddingTop: "30px",
          //   paddingBottom: "30px",
          minHeight: "300px",
          backgroundColor: "",
          padding: "25px",
        }}
      >
        <p style={{ float: left }}>
          <strong>Project Title here</strong>
        </p>
        <Row style={{ padding: "15px" }}>
          <Col>
            <Row>
              <p>insert type 2022-12-18</p>
            </Row>
            <Row>
              <Card>smoll description here</Card>
            </Row>
            <Row>
              <a
                href={"http://github.com/krish1000"} //props.link or something should be here
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub />
              </a>
            </Row>
          </Col>
          <Col>
            <Card>
              <p> hello</p>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProjectCard;
