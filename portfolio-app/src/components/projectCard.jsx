// import './section.css';
import { Card, Row, Col, Image } from "react-bootstrap";
import { SiGithub } from "react-icons/si";

const ProjectCard = (props) => {
  console.log(props);

  let orientation = props.orientation;

  return (
    <div
      style={{
        width: "80%",
        marginTop: "30px",
        // alignItems: "normal",
        // alignContent: "normal",
        textAlign: "left",
        // position: "static",
        // right: "12%",
      }}
    >
      <Card
        style={{
          //   paddingTop: "30px",
          //   paddingBottom: "30px",
          minHeight: "250px",
          backgroundColor: "",
          padding: "15px",
        }}
      >
        <Row style={{ padding: "15px" }}>
          <Col sm={4}>
            <Row>
              <p>
                <strong style={{ float: orientation }}>
                  Project Title here
                </strong>
              </p>
            </Row>

            <Row>
              <p>insert type 2022-12-18</p>
            </Row>
            <Row style={{ left: "10%" }}>
              <Card
                style={{
                  zIndex: 999,
                  backgroundColor: "#00a46b",
                  left: "10%",
                }}
              >
                smoll description here blah blah
              </Card>
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
          <Col sm={8}>
            <Row style={{ position: "relative", left: "12%" }}>
              <Image
                // style={{ zIndex: 1 }}
                // width={"50px"}
                // style={{ borderRadius: "25px" }}
                rounded
                src="https://images.pexels.com/photos/3629227/pexels-photo-3629227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              ></Image>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProjectCard;
