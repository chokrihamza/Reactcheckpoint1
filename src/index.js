import React from 'react';
import ReactDOM from 'react-dom';
import {Container,Jumbotron,Row, Col,Button,Form,Card,Image,ListGroup,ListGroupItem  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class MyHeader extends React.Component {
    render() {
      return (
      <div>
      <Jumbotron className="jumbo" fluid >
  
  <h1>
    What is your opinion on the proposed triple language
  </h1>
  <div style={{color:"pink",textAlign:"center"}}>
  <h3 className="react">React.js</h3>
  <h3 className="angular">Agular</h3>
  <h3 className="vue">Vue.js</h3>
  </div>
</Jumbotron>
<Container>
<Form className="form">
<Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2} >
     Your name: 
    </Form.Label>
    <Col sm={10}>
    <Form.Control placeholder="First name" />
    </Col>
  </Form.Group>
    
    <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Last name:
    </Form.Label>
    <Col sm={10}>
    <Form.Control placeholder="Last name" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
     Password: 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        <h5>Your favorite Language:</h5>
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="React"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Agular"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Vue"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" variant="info">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
<Container className="cards">
          <Row>
          <Col xs={6} md={4}>
            
          <Card style={{ width: '100%', height:'700px' }}>
          <Card.Img variant="top" src="/images/angular.png" style={{height:"200px"}}/>
          <Card.Body>
           <Card.Title>Angular</Card.Title>
          <Card.Text>
          Angular (commonly referred to as "Angular 2+" or "Angular
           v2 and above") is a TypeScript-based open-source web 
           application framework led by the Angular Team at Google and 
           by a community of individuals and corporations. Angular is a 
           complete rewrite from the same team that built AngularJS.
            </Card.Text>
         </Card.Body>
             <ListGroup className="list-group-flush">
             <ListGroupItem>Angular does not have a concept of "scope" or controllers,</ListGroupItem>
             <ListGroupItem>Angular has a different expression syntax</ListGroupItem>
             </ListGroup>
               <Card.Body>
    
          </Card.Body>
          </Card>
           </Col>
           <Col xs={6} md={4}>
           <Card style={{ width: '100%' , height:'700px'}}>
          <Card.Img variant="top" src="/images/vue.jpeg" style={{height:"200px" }} />
          <Card.Body>
           <Card.Title>Vue.js</Card.Title>
          <Card.Text>
          Vue.js (commonly referred to as Vue) is an 
          open-source model–view–viewmodel front end JavaScript
           framework for building user interfaces and single-page
            applications. It was created by Evan You, and is maintained
             by him and the rest of the active core team members coming 
             from various companies such as Netlify and Netguru.
            </Card.Text>
         </Card.Body>
             <ListGroup className="list-group-flush">
             <ListGroupItem>The Progressive JavaScript Framework</ListGroupItem>
             <ListGroupItem>Vue was created by Evan You after working for Google
                using AngularJS in a number of projects</ListGroupItem>
             </ListGroup>
               <Card.Body>
    
          </Card.Body>
          </Card>
           </Col>
           <Col xs={6} md={4}>
           <Card style={{ width: '100%', height:'700px'}}>
          <Card.Img variant="top" src="/images/react.png" style={{height:"200px"}}/>
          <Card.Body>
           <Card.Title>Card Title</Card.Title>
          <Card.Text>
          React (also known as React.js or ReactJS) is an open-source,
           front end, JavaScript library for building
            user interfaces or UI components. It is maintained by
             Facebook and a community of individual developers and 
             companies. React can be used as a base in the development
              of single-page or mobile applications
            </Card.Text>
         </Card.Body>
             <ListGroup className="list-group-flush">
             <ListGroupItem>React is only concerned with rendering data to the DOM</ListGroupItem>
             <ListGroupItem> React Router are respective examples of such libraries.</ListGroupItem>
             </ListGroup>
               <Card.Body>
    
          </Card.Body>
          </Card>
           </Col>
          </Row>
        
          </Container>
</Container>
</div>
        
      );
    }
  }
  
  ReactDOM.render(<MyHeader />, document.getElementById('root'));