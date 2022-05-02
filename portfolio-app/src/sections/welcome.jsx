import { useEffect } from 'react';
import { Container, Row, Col, Image, Card} from 'react-bootstrap';
import { SiGithub, SiLeetcode, SiLinkedin, SiGmail } from 'react-icons/si';
import './section.css';

import { StartTextAnimation } from '../miscell/type.js';

const Welcome = (props) => {

    useEffect(() => {
        // found out you can do css on console log
        console.log('%cUseeffect, typewritter should be up...', "color: black;font-weight:bold;background-image: linear-gradient(to right, #12D8FA, #A6FFCB); padding: 10px 10px; border-radius: 5px")
        StartTextAnimation(0); // starts typewritter animation on app mount
    }, []);

    const icons = () => {
        var links = ['http://github.com/krish1000', 'http://leetcode.com/Krazynukz/', 'https://www.linkedin.com/in/krishaanth-manoharan/', 'mailto:krishaanth1000@gmail.com']
        return(
            <div style={{display: 'flex', gap: 25,  alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}> {/* pretty cool flex grid css to apply padding to child components, rather than mapping */}
                <a href={links[0]} target="_blank" rel="noopener noreferrer"> <SiGithub /> </a> {/* Need the target to blank and rel to open in new tab */}
                <a href={links[1]} target="_blank" rel="noopener noreferrer"> <SiLeetcode /> </a>
                <a href={links[2]} target="_blank" rel="noopener noreferrer"> <SiLinkedin /> </a>
                <a href={links[3]}> <SiGmail /> </a>

            </div>
        );
    };

    return (
        <div id="welcome" className='section-welcome-jumbo'>
            <Container>
            <Col style={{alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
                {/* <Col md>
                    
                </Col> */}
                {/* <Col style={{alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}> */}
                    <div style={{minHeight: '60vh'}}>
                    {/* <Row>
                    <Image width={125} roundedCircle src='https://avatars3.githubusercontent.com/u/54220286?s=460&u=8ebd8bd9ed0403c51e674be504f74770cc6c7948&v=4'></Image>
                    </Row> */}
                    <span style= {{color: '#5EFC8D', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'calc(10px + 1.5vw)'}}> Hey there! </span>  <br/>
                    <span style={{color: '#8EF9F3', fontFamily: "'Poppins', sans-serif", lineHeight: 1, fontSize: 'calc(10px + 6.75vw)'}}> <div id="demo-text"> I'm Krishaanth <br /> Manoharan </div> </span>
                    {/* "poppins-medium", sans-serif */}
                    {/* 'Roboto, sans-serif' */}
                    {/* <Card style={{color: 'black', backgroundColor: 'rgba(0%, 0%, 0%, 0.0)', padding: '5px',}}>
                        Gamer. Computer Science Undergraduate. Software Developer.
                    </Card> */}
                    {/* <h5> I am a Gamer, Computer Science Undergraduate & Software Developer.</h5> */}
                    <Row style={{fontSize: 15, alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
                    <h1 style={{fontSize: 15, fontFamily: "Courier New", fontWeight: 500, fontSize: 'calc(7px + 0.85vw)', paddingTop: '5px'}}> <span style={{color: "#5EFC8D", fontWeight: 900}}> {'>'} </span> <span id="welcome-type-writer"></span> </h1> {/* caret animation in type.js applied via class on span */}
                    </Row>
                    </div>
                    {icons()}

                {/* </Col> */}
                {/* <Col md={4}>
                <h1 style={{}}> I'm a <br/> <span id="welcome-type-writer"></span> </h1> 
                    
                </Col> */}

            </Col>
            </Container>
            
        </div>
    )
}

export default Welcome;


// OLD CODE:
{/* <h1 style={{color: "rgba(0,0,0,0.25)", textShadow: "0 0 10px rgba(200,200,200,0.95)", '-webkit-text-stroke': '1px rgba(255,255,255,0.01)'}}> I'm a <br/> <span id="welcome-type-writer"></span> </h1> caret animation in type.js applied via class on span */}
{/* <h1 style={{color: "rgba(0,0,0,0.25)", textShadow: "0 0 10px rgba(200,200,200,0.9)", '-webkit-text-stroke': '1px white'}}> I'm a <span id="welcome-type-writer"></span> </h1> caret animation in type.js applied via class on span */}