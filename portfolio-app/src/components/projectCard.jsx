// import './section.css';
import "../components/components.css";
import { Card, Row, Col, Image } from "react-bootstrap";
import { SiGithub } from "react-icons/si";

const ProjectCard = (props) => {
  console.log(props);

  let orientation = props.orientation;

  return (
    <div
      style={{
        margin: "50px",
        textAlign: "left",
      }}
      className="projectCard"
    >
      <Card
        style={{
          // minHeight: "450px",
          // maxHeight: "475px",
          backgroundColor: "",
          padding: "15px",
          paddingLeft: "30px",
        }}
      >
        <Row style={{ padding: "15px" }}>
          <Col lg={4}>
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
            <Row //style={{ height: "55%" }}
            >
              <Card
                style={{
                  zIndex: 999,
                  backgroundColor: "#00a46b",
                  // left: "10%",
                  // width: "150%",
                }}
              >
                smoll description here blah blah
              </Card>
            </Row>
            <Row>
              <p>insert tools used</p>
            </Row>
            <Row>
              <div>
                <a
                  href={"http://github.com/krish1000"} //props.link or something should be here
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub />
                </a>
              </div>
            </Row>
          </Col>
          <Col sm={8}>
            <Row
              className="projectImage"
              // style={{ position: "relative", left: "12%" }}
            >
              {/* <Image
                // style={{ zIndex: 1 }}
                // width={"50px"}
                // style={{ width: "500%" }}
                // className="projectImage"
                src="https://images.pexels.com/photos/3629227/pexels-photo-3629227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              ></Image> */}
              <div>
                <img
                  style={{
                    borderRadius: "3%",
                    objectFit: "contain",
                    height: "380px",
                    width: "100%",
                    // display: "block",
                    // width: "auto",
                    // height: "auto",
                  }}
                  src="https://images.pexels.com/photos/3629227/pexels-photo-3629227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </div>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProjectCard;
