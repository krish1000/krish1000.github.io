// import './section.css';
import "../components/components.css";
import { Card, Row, Col, Image } from "react-bootstrap";
import { SiGithub } from "react-icons/si";
// import { RxOpenInNewWindow } from "react-icons/";

const ProjectCard = (props) => {
  console.log(props);

  let orientation = props.orientation;

  return (
    <div
      style={{
        // margin: "50px",
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
          minHeight: "450px",
          maxHeight: "450px",
          backgroundColor: "",
          padding: "15px",
          paddingLeft: "30px",
        }}
      >
        <Row style={{ padding: "15px" }}>
          <Col className=" " lg={4}>
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
            <Row className="h-55" style={{ minHeight: "180px", width: "150%" }}>
              <Card
                style={{
                  zIndex: 999,
                  // backgroundColor: "#00a46b",
                  backgroundColor: "#0c0c0e",
                  color: "white",
                  // left: "10%",
                  // width: "150%",
                  // height: "100%",
                }}
              >
                {/* smoll description here  */}
                {props.desc}
              </Card>
            </Row>
            {/* </div> */}
            <Row className="">
              <p>insert tools used</p>
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
