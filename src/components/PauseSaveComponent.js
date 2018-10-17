import React, { Component } from 'react';
import { Container, Row, Col, Form} from 'reactstrap';
import styled from 'styled-components';

const PauseButton = styled.div `
  background: #000075;
  font-weight: bold;
  -webkit-text-fill-color: rgb(0, 200, 0);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:#888;

`
const SaveButton = styled.div `
  background: #750000;
  font-weight: bold;
  -webkit-text-fill-color: rgb(0, 200, 0);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:#bbb;
`
export default class PauseSaveComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    
    };
    //this.togglePause = this.togglePause.bind(this);
  }

  togglePause = (e)  => {
    e.preventDefault();
    const { pauseTimer } = this.state;
    const { onClickPause } = this.props;
    onClickPause(pauseTimer);
  }
  
  clickSave = (e) => {
    e.preventDefault();
    const { saveTimerClicked } = this.state;
    const { onClickSave } = this.props;
    onClickSave(saveTimerClicked);
  }

  render(){
    return (
      <Container>
        <Row>
          <Col xs="6">
            <PauseButton>
              <h3>
                <button id="pauseButton" onClick= { this.togglePause }>
                  Pause
                </button>
              </h3>
            </PauseButton>
          </Col>
          <Col xs="6">
            <SaveButton>
              <h3>
                <button id="saveButton" onClick= { this.clickSave }>
                  Stop
                </button>
              </h3>
            </SaveButton>
          </Col>
        </Row>
      </Container>
    )
  }
}


