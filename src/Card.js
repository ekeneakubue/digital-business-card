import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col,Table} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './Card.css';

export default function Cards() {
  return (
    <Container> 
        
        <Row>
        <div class="card">
            
            <div >
                <Card.Img variant="top" src="ekene.jpg"/>
            </div>            
            {/* <div class="card-header">
                Featured
            </div> */}
            <div class="card-body text-center bg-dark cad-tex">
                <h2 class="card-title text-white">Ekene Akubue</h2>
                <h5 className='text-info'>Frontend Developer</h5>
                <h5><Icon.TelephoneFill className='text-primary'/> +234 803 2744 865</h5><br/>
                <Row>
                <Col><a href="mailto:ekeneakubue@gmail.com" target="_blank" rel="ekeneakubue" className="icon-colour home-social-icons"><Button variant="info btn btn-block"><Icon.Envelope/> Email</Button></a></Col>
                <Col><a href="https://www.linkedin.com/in/ekene-akubue-58046b77/"><Button variant="info btn btn-block"><Icon.Linkedin/> Linkedin</Button></a></Col>
                </Row><br/><br/>

                <h5 className='text-white'>About</h5>
                <hr className='bg-light'/>
                <p class="card-text text-justify">I am a Front-End Developer with 3+ years experience in Web Development. 
                I have a Passion for Creating Clean, Beautiful, Responsive and User Friendly Interfaces
                I have learnt HTML, CSS, React-Bootstrap and fundamentals of Javascript & ReactJS. 
                I am still actively learning news skills such as; NodeJS, Express and MongoDB for Backend Development.</p>
                
                <h5 className='text-white'>Most used Tools</h5>
                <hr className='bg-light'/>
                <p>Ubuntu Linux, VSCode, GitHub, Vercel, Netlify, Inkscape</p>
            </div>
            <div class="text-center footer">
                <Container>
                    <Row>
                        <Col><a className="text-info" href="https://twitter.com/gigoplanet"><h2><Icon.Twitter/></h2></a></Col>
                        <Col><a className="text-info" href="https://github.com/ekeneakubue"><h2><Icon.Github/></h2></a></Col>
                        <Col><a className="text-info" href="https://www.instagram.com/ekeneakubue/"><h2><Icon.Instagram/></h2></a></Col>
                    </Row>
                </Container>                
            </div>
        </div> 
        </Row>              
    </Container>
  );
}

