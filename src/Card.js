import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './Card.css';
import cardimg from './img/ekene.jpg'

export default function Cards() {
  return (
    <Container>         
        <Row>
            <div class="card">
                <div className='pp'>
                    <Col md={4}></Col>
                    <Col md={4}> 
                        <Card.Img variant="top" className="mypassport" src={cardimg} />
                    </Col>
                    <Col md={4}></Col>
                </div>            
                
                <div class="card-body text-center bg-dark cad-tex">
                    <h2 class="card-title text-white">Ekene Akubue</h2>
                    <h5 className='text-info'>Frontend Developer</h5>
                    <h5><Icon.TelephoneFill className='text-primary'/> +234 803 2744 865</h5><br/>
                    <Row>
                    <Col><a href="mailto:gigocode@gmail.com" target="_blank" rel="ekeneakubue" className="icon-colour home-social-icons"><Button variant="info btn btn-block"><Icon.Envelope/> Email</Button></a></Col>
                    <Col><a href="https://www.linkedin.com/in/ekene-akubue-58046b77/" target="_blank"><Button variant="info btn btn-block"><Icon.Linkedin/> Linkedin</Button></a></Col>
                    </Row><br/><br/>

                    <h5 className='text-white'>About</h5>
                    <hr className='bg-light'/>
                    <p class="card-text text-justify">I am a Fullstack Developer with 2+ years experience in Web Development. I have a Passion for Creating Clean, 
                    Beautiful, Responsive and User Friendly Interfaces. I have learnt HTML, CSS, React-Bootstrap,  Javascript, ReactJS, NodeJS, ExpressJS, MongoDB, 
                    EmailJS and many more. I am  looking to collaborate in any JavaScript Project.</p>
                    
                    <h5 className='text-white'>Most used Tools</h5>
                    <hr className='bg-light'/>
                    <p>Ubuntu Linux, VSCode, GitHub, Vercel, Netlify, Inkscape</p>
                </div>
                <div class="text-center footer">
                    <Container>
                        <Row>
                            <Col><a className="text-info" href="https://wa.me/+2348032744865" target="_blank" rel="noopener npreferrer"><h2><Icon.Whatsapp/></h2></a></Col>
                            <Col><a className="text-info" href="https://github.com/ekeneakubue" target="_blank"><h2><Icon.Github/></h2></a></Col>
                            <Col><a className="text-info" href="https://www.instagram.com/ekeneakubue/" target="_blank"><h2><Icon.Instagram/></h2></a></Col>
                        </Row>
                    </Container>                
                </div>
            </div> 
        </Row>              
    </Container>
  );
}

