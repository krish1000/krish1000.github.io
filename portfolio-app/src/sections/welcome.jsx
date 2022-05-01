import { useEffect } from 'react';
import { Container, Row, Col, Image, Card} from 'react-bootstrap';
import { SiGithub, SiLeetcode, SiLinkedin, SiGmail } from 'react-icons/si';
import './section.css';

import { StartTextAnimation } from '../miscell/type.js';

const Welcome = (props) => {

    useEffect(() => {
        // found out you can do css on console log
        console.log('%cUseeffect, typewritter should be up...', "color: black;font-weight:bold;background-image: linear-gradient(to right, #12D8FA, #A6FFCB); padding: 10px 10px; border-radius: 5px")
        StartTextAnimation(0);
    }, []);

    const icons = () => {
        var links = ['http://github.com/krish1000', 'http://leetcode.com/Krazynukz/', 'https://www.linkedin.com/in/krishaanth-manoharan/', 'mailto:krishaanth1000@gmail.com']
        return(
            <div style={{display: 'flex', gap: 15}}> {/* pretty cool flex grid css to apply padding to child components, rather than mapping */}
                <a href={links[0]}> <SiGithub /> </a>
                <a href={links[1]}> <SiLeetcode /> </a>
                <a href={links[2]}> <SiLinkedin /> </a>
                <a href={links[3]}> <SiGmail /> </a>

            </div>
        );
    };

    return (
        <div id="welcome" className='section-welcome-jumbo'>
            <Container>
            <Row >
                {/* <Col md>
                    
                </Col> */}
                <Col md={8} style={{alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{padding: '15px'}}>
                        <Image width={125} roundedCircle src='https://avatars3.githubusercontent.com/u/54220286?s=460&u=8ebd8bd9ed0403c51e674be504f74770cc6c7948&v=4'></Image>
                        <h1 style={{fontSize: 50}}>
                            <span style= {{color: '#5EFC8D', fontSize: 25}}> Hey there! </span> <br />
                            <span style={{color: '#8EF9F3', fontFamily: 'Roboto, sans-serif'}}> I'm Krishaanth Manoharan </span>
                        </h1>
                        {/* <Card style={{color: 'black', backgroundColor: 'rgba(0%, 0%, 0%, 0.0)', padding: '5px',}}>
                            Gamer. Computer Science Undergraduate. Software Developer.
                        </Card> */}
                        {/* <h5> I am a Gamer, Computer Science Undergraduate & Software Developer.</h5> */}
                        {icons()}
                    </div>
                </Col>
                <Col md={4}>
                <h1 style={{}}> I'm a <br/> <span id="welcome-type-writer"></span> </h1> {/* caret animation in type.js applied via class on span */}
                    {/* <h1 style={{color: "rgba(0,0,0,0.25)", textShadow: "0 0 10px rgba(200,200,200,0.95)", '-webkit-text-stroke': '1px rgba(255,255,255,0.01)'}}> I'm a <br/> <span id="welcome-type-writer"></span> </h1> caret animation in type.js applied via class on span */}
                    {/* <h1 style={{color: "rgba(0,0,0,0.25)", textShadow: "0 0 10px rgba(200,200,200,0.9)", '-webkit-text-stroke': '1px white'}}> I'm a <span id="welcome-type-writer"></span> </h1> caret animation in type.js applied via class on span */}
                </Col>

            </Row>
            </Container>
            
        </div>
    )
}

export default Welcome;