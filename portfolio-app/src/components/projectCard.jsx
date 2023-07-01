// import './section.css';
import "../components/components.css";
// import "../media/projectImages";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { SiGithub } from "react-icons/si";
import { FaToolbox } from "react-icons/fa";
// import { RxOpenInNewWindow } from "react-icons/";

const renderTools = (toolsList) => {
  // return toolsList.map((tool) => <td style={{ width: "25%" }}> {tool} </td>);
  return toolsList.map((tool) => <strong> {tool} </strong>);
};

const ProjectCard = (props) => {
  console.log(props);

  let orientation = props.orientation;

  return (
    <div
      style={{
        margin: "50px",
        marginLeft: "13%",
        marginRight: "13%",
        textAlign: "left",
        // paddingLeft: "10%",
        // paddingRight: "10%",
      }}
      className="projectCard"
    >
      <Card
        style={{
          minHeight: "405px",
          maxHeight: "405px",
          backgroundColor: "",
          padding: "15px",
          paddingLeft: "30px",
        }}
      >
        <Container fluid>
          <Row style={{ padding: "15px" }}>
            <Col
              className=" "
              md={8}
              style={{
                zIndex: 999,
              }}
            >
              <Row className="">
                <p>
                  <strong style={{ float: orientation }}>
                    {/* Project Title here */}
                    {props.title}
                  </strong>
                </p>
              </Row>

              <Row className="">
                {/* <p>insert type 2022-12-18</p> */}
                <p style={{ fontSize: "15px" }}>{props.subTitle}</p>
              </Row>
              {/* BAD DESIGN, NEED TO FIX THIS LATER!!! ******************
                DONT USE FIXED HEIGHT VALUE!! ******** */}
              {/* <div> */}
              <Row
                className="h-55"
                style={{ minHeight: "125px", width: "90%" }}
              >
                <Card
                  style={{
                    // zIndex: 999,
                    // backgroundColor: "#00a46b",
                    backgroundColor: "rgba(255, 255, 255, 0.35)",
                    backdropFilter: "blur(25px)",

                    // background:
                    //   "linear-gradient(to right, #0c0c0e 50% ,  #0c0c0eb90 200%)",
                    opacity: "5px",
                    color: "black",
                    fontSize: "15px",
                    padding: "15px",
                    borderWidth: "5px",
                    // borderColor: "#152338"
                  }}
                >
                  {/* smoll description here  */}
                  {props.desc}
                </Card>
              </Row>
              {/* </div> */}
              <Row className="" style={{ paddingTop: "15px" }}>
                {/* <p>Tools used will be here</p> */}
                {/* {props.tools} */}
                <div
                  style={{
                    fontSize: "14px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  {renderTools(props.tools)}
                </div>
                {/* <table style={{ width: "50%" }}>
                <tr style={{ fontSize: "14px" }}>{renderTools(props.tools)}</tr>
              </table> */}
              </Row>
              <Row className="">
                <div>
                  <a
                    href={"http://github.com/krish1000"} //props.link or something should be here
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub />
                  </a>
                  {/* <RxOpenInNewWindow /> */}
                </div>
              </Row>
            </Col>
            <Col
              md={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Row
                className="projectImage"
                // style={{ width: "200%" }}
                style={{ position: "relative", right: "85%" }}
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
                      // objectFit: "contain",
                      // objectFit: "fill",
                      objectFit: "cover",
                      height: "345px",
                      width: "220%",
                      // width: "200%",
                      // left: "50%",

                      // display: "block",
                      // width: "auto",
                      // height: "auto",
                    }}
                    // src={require("../media/projectImages/ecommerceLanding.jpg")}
                    src={require("../media/projectImages/" + props.images[0])}
                    // src="https://images.pexels.com/photos/3629227/pexels-photo-3629227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default ProjectCard;
