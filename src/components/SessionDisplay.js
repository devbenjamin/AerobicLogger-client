import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import styled from 'styled-components';


export default class PauseSaveComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    
    };
    //this.togglePause = this.togglePause.bind(this);
  }

  render(){
    return (
      <Container>
        <Row>
          <Col>
          <div>
      <Card body>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card body className="text-center">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card body className="text-right">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
    </div>
          </Col>
        </Row>
      </Container>
    )
  }
}


