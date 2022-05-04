import './section.css';
import { Container, Row, Col, Card} from 'react-bootstrap';

const About = (props) => {

    return (
        <div id="about" className='section-about-jumbo'>
            <Container>
                <Col>
                <Row className='align-flex-style'>
                <h1 style={{fontFamily: "'Poppins', sans-serif", lineHeight: 1, color: '#ffd6a2', fontSize: 'calc(20px + 1.5vw)'}}> Let me introduce myself.</h1>
                </Row>
                <Row className='align-flex-style' >
                    {/* <div className='align-flex-style' style={{backgroundColor:"red", padding: "25px 100px"}}>
                        <p>asdfasfdsf</p>
                    </div> */}
                    
                    <Card style={{backgroundColor: 'transparent', borderWidth: 'calc(7.5px + 0.125vw)'}}> 
                        <Card.Body style={{fontSize: 'calc(10px + 0.25vw)', color: 'white', fontFamily:"'Poppins', sans-serif"}}>
                            I'm a current 4th-year undergraduate student, pursuing a BSc. Specialized Honours Computer Science degree at York University. <br /><br />
                            I find myself dabbling into a lot of different technologies. I have experience in developing real-time web applications as a FullStack Developer.
                            Experience in web design via wireframes. As well as networking and Big Data applications involving data streaming via Apache Spark. <br /><br />
                            
                            I love to learn new technologies in my spare time along with leetcoding. Feel free to take a look at my projects and connect with me!
                        </Card.Body>
                    </Card>
                        
                </Row>
                
                </Col>
            </Container>
        </div>
    )
}

export default About;