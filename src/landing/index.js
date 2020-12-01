import { FullWrap, Heading, Text,Input,Signupbutton,Paragraph,Markwrap,Colwrap } from './style'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import { Row, Col, Container,} from 'reactstrap';


function Landing() {
    return (
        <>
        <FullWrap>
            <Header />
            <Container style={{marginTop:"60px"}}>
                <Row>
                    <Col xs="6">
                        <Heading>Live Chat Support For Your Customers.</Heading>
                        <Text>Create Custom Landing Pages With Shades That Converts More Visitors Than Any Website-No Coding Required.</Text>
                        <Input type="text" placeholder="Enter Your Email Address" />
                        <Signupbutton>Get Started</Signupbutton>
                        <Paragraph>Already Using Shade? <span>Sign In</span></Paragraph>
                    </Col>




                    <Col xs="6"><img src="/images/banner.jpg" /></Col>

                </Row>
            </Container>

        </FullWrap>


            <Markwrap>
            <h1 style={{textAlign:"center"}}>Mark Your Next Step</h1>
             <Container>
                 
             </Container>

             </Markwrap>

        <Container>
             <Row>
        <Col md="3"><Colwrap>1</Colwrap></Col>
        <Col md="3"><Colwrap>2</Colwrap></Col>
        <Col md="3"><Colwrap>3</Colwrap></Col>
        <Col md="3"><Colwrap>4</Colwrap></Col>
            </Row>
        </Container>

        <Container>
             <Row>
        <Col md="3"><Colwrap>1</Colwrap></Col>
        <Col md="3"><Colwrap>2</Colwrap></Col>
        <Col md="3"><Colwrap>3</Colwrap></Col>
        <Col md="3"><Colwrap>4</Colwrap></Col>
            </Row>
        </Container>
            </>
            

    );
}

export default Landing;
