import React, { Component } from 'react';
import { Container, Row, Col, Form, Input} from 'reactstrap';
// import { Form, Text } from react-form;
// import Moment from 'react-moment';
// import 'moment-timezone';
// import ReactDOM from 'react-dom';
import Center from 'react-center';
import styled from 'styled-components';
import StartButtonBegin from './StartButtonBegin';
import ElapsedTime from './ElapsedTime';
import SloganComponent from './SloganComponent';
import PauseSaveComponent from './PauseSaveComponent';
import APIURL from '../helpers/environment';
import { runInThisContext } from 'vm';
// import styles from './app.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import TimeFields from './TimeFields'

const TimeComponentDiv = styled.div `
  background: #750000;
  width: 100vw;
  margin-left: -15px;
  padding-right: 0px !important;
`
const SmallBoxes = styled.div `
  background: #777;
  color: #fff;
  border-radius: 10px !important;
  width: 10em;
  margin: 0 auto;
  padding-right: 0px;
  margin-right: -15px;
`
const TimeDisplay = styled.div `
  background: white;
  opacity: 40%;
  color: #000075;
  float: left;
  width: 10em;
`
const AlignRight = styled.div `
  text-align: right;
  float: right;
  height: 3em;
`
const PaddingTop = styled.div `
  padding-top: 3em;
`
const DateDiv = styled.div `
  
`
const BiometricsDisplay = styled.div `
  background: white;
  opacity: 40%;
  width: 10em;
  padding: 0;
`

export default class TimeReporting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showStartTime: false,
      showFinishTime: false,
      startTime: false,
      pauseTimer: false,
      epochTimeZero: 0,
      timeZero: 0,
      saveTimerClicked: false,
      staticFinishTimeEpoch: 0,
      staticFinishTime: 0,
      totalTime: 0,
      finishHours: 0,
      finishMinutes: 0,
      finishSeconds: 0,
      todayDate: new Date().getDate(),
      todayMonth: new Date().getMonth()+1,
      todayYear: new Date().getFullYear(),
      finalSeconds: 0,
      finishTime: '',
      dbDate: ''
    };
  }

  onSave = (saveTimerClicked) => {
    console.log('this.state:',this.state)
    let epoch = (Date.now());
    let timeStamp = new Date(Date.now()).toLocaleTimeString();
    // let seconds = this.state.staticFinishTimeEpoch - this.state.epochTimeZero;
    let seconds = Math.floor(this.state.finalSeconds/1000);
    
    this.setState({ 
      finishHours: Math.floor(seconds / 3600),
      finishMinutes: Math.floor((seconds - (this.state.finishHours * 3600)) / 60),
      finishSeconds: Math.floor((seconds - (this.state.finishHours * 3600) - (this.state.finishMinutes * 60))),
      saveTimerClicked: true,
      staticFinishTimeEpoch: epoch,
      staticFinishTime: timeStamp,
      finalSeconds: epoch - this.state.epochTimeZero ,
      finishTime: this.state.finishHours + ":" + this.state.finishMinutes + ":" + this.state.finishSeconds,
    })
    console.log('onSave saveTimerClicked:',this.state.saveTimerClicked)
    // this.setState({ dbDate: "20" + this.state.todayYear + "-" + this.state.todayMonth + "-" + this.state.todayDate})
    fetch(`http://localhost:3000/sessiondata`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
    }),
      body: JSON.stringify({
        date: new Date(Date.now()),
        // startTime: this.state.showStartTime,
        // finishTime: this.state.staticFinishTime,
        // totalTime: totalTime,
        // resistance: this.state.resistance,
        // elevation: this.state.elevation,
        // mhr: this.state.mhr,
        // calories: this.state.calories,
        // weight: this.state.weight
      }),
    })
    .then(response => console.log(response))
    .then(workoutData => console.log(workoutData));
    // event.preventDefault();
    //postAerobicData();
  }

  postAerobicData = (index) => {
    let url = `${APIURL}/slogan/${index}`
    fetch((url), {
      method: 'POST',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': this.props.token
      })
    })
      .then(
        (response) => response.json()
      )
      .then(
        (data) => {
          console.log('data:',data.title)
          let sloganDisplay = data.title;
          console.log('sloganDisplay:',sloganDisplay)
        }
      )
  }
  onPauseTimerToggle = (pauseTimer) => {
    //console.log('onPauseTimer-before ternary:',this.state.pauseTimer)

  this.state.pauseTimer ? this.setState({ pauseTimer: false }) : this.setState({ pauseTimer: true });
    
  console.log('onPauseTimer:',this.state.pauseTimer)
  }
  getTimeString() {
    const date = new Date(Date.now()).toLocaleTimeString()
    return date;
  }
  getTimeStringMinutes() {
    const date = new Date(Date.now()).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
    return date;
  }
  
  componentDidMount() {
    const _this = this;
    this.timer = setInterval(function () {
      let date = _this.getTimeString(); 
      _this.setState({
        time: date,
      })
    }, 1000)
    this.timer = setInterval(function () {
      let date = _this.getTimeStringMinutes(); 
      _this.setState({
        minutes: date,
      })
    }, 1000)
  }

  startClicked = () => {
    let staticStartTime = new Date(Date.now()).toLocaleTimeString();
    let epochStaticStartTime = (Date.now());
    this.setState({ 
      showStartTime: true,
      timeZero: staticStartTime,
      epochTimeZero: epochStaticStartTime 
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (event) => {
    console.log("########minutes:",this.state.minutes)
    console.log(this.state)
    // let totalTime = this.state.finishHours + ":" + ("0" + this.state.finishMinutes).slice(-2) + ":" + ("0" + this.state.finishSeconds).slice(-2)
    
  }

  displayTotal = () => {
    this.state.finishHours + ":" + ("0" + this.state.finishMinutes).slice(-2) + ":" + ("0" + this.state.finishSeconds).slice(-2)
  }

  render(){
    return (
      <div>
        {/*** HEADER  ***/}
        <Container>
          <TimeComponentDiv>
            <Row className="barHeight">
              <Col xs="3">
                <Center>
                  {/* TIME ON TOP LEFT */}
                  <SmallBoxes>
                    {/* { time } */}
                    { this.state.minutes }
                  </SmallBoxes>
                </Center>
              </Col>
              {/* ** START / ELAPSED TIME BUTTON */}
              <Col xs="6">
                <Center>
                  {!(this.state.showStartTime) 
                    ? <button onClick={this.startClicked } className = "timeButton">
                    <StartButtonBegin />
                    </button> 
                    : <ElapsedTime 
                    timeZero={this.state.timeZero} 
                    epochTimeZero={this.state.epochTimeZero}
                    pauseTimer={this.state.pauseTimer}
                    />
                  }
                </Center>
              </Col>
              <Col xs="3">
                <DateDiv>
                  <Center>
                    {/* DATE ON TOP RIGHT */}
                    <SmallBoxes>
                      {this.state.todayMonth}/{this.state.todayDate}/{this.state.todayYear}
                      
                    </SmallBoxes>
                  </Center>
                </DateDiv>
              </Col>
            </Row> 
          </TimeComponentDiv>
          <Row>
            <Col xs="6">
              <PaddingTop />
                <AlignRight>
                  <h3>
                    START TIME: 
                  </h3>
                </AlignRight>
            </Col>
            <Col xs="6">
            <PaddingTop />
            {/* ** START TIME DISPLAY */}
              <TimeDisplay>
                <h3>
                  {/* {console.log(getTimeString())} */}
                  {
                    this.state.showStartTime 
                    ? 
                    this.state.timeZero 
                    : 
                    <div>
                      0:00:00
                    </div>
                  }
                  </h3>
              </TimeDisplay>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
            <AlignRight>
                <h3>
                  FINISH TIME:
                </h3>
                </AlignRight>
            </Col>
            <Col xs="6">
            {/* ** FINISH TIME DISPLAY */}
              <TimeDisplay>
                <h3>
                  {this.state.saveTimerClicked ? this.state.staticFinishTime : "Not yet..."} 
                </h3>
              </TimeDisplay>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <AlignRight>
                <h3>
                  TOTAL TIME:
                </h3>
                </AlignRight>
              </Col>
            <Col xs="6">
            <TimeDisplay>
              <h3>
                {/* ** TOTAL TIME DISPLAY */}
                {this.state.saveTimerClicked 
                  ? 
                    this.state.finishHours + ":" + ("0" + this.state.finishMinutes).slice(-2) + ":" + ("0" + this.state.finishSeconds).slice(-2)
                    // this.setState(finishSeconds: this.state.finishSeconds)
                  : 
                    null
                  }
              </h3>
              </TimeDisplay>
            </Col>
          </Row>
          <form onSubmit={ this.handleSubmit }>
            <Row>
              <Col xs="6">
                <AlignRight>
                  <h3>
                    LEVEL:
                  </h3>
                </AlignRight>
              </Col>
              <Col xs="6">
              {/* ** LEVEL DISPLAY */} 
              <h4>
              <label>
                <Input name="level" className="level" type="number" value={this.state.value} onChange={this.handleChange} />
              </label>
              </h4> 
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <AlignRight>
                  <h3>
                    ELEVATION:
                  </h3>
                  </AlignRight>
                </Col>
              <Col xs="6">
              {/* **ELEVATION DISPLAY */}
              <h4> 
              <label>
                {/* <div className="log-input-fields"> */}
                <Input name="elevation" className="elevation" type="number" value={this.state.value} onChange={this.handleChange} />
                {/* </div> */}
              </label>
              </h4> 
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <AlignRight>
                  <h3>
                    MHR:
                  </h3>
                </AlignRight>
              </Col>
              <Col xs="6">
              {/* ** MHR DISPLAY */}
              <BiometricsDisplay>
              <h4> 
              <label>
                <Input name="mhr" className="mhr" type="number" value={this.state.value} onChange={this.handleChange} />
              </label>
              </h4> 
              </BiometricsDisplay>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <AlignRight>
                  <h3>
                    CALORIES:
                  </h3>
                </AlignRight>
              </Col>
              <Col xs="6">
              {/* ** CALORIES DISPLAY */}
              <BiometricsDisplay>
              <h4> 
              <label>
                <Input name="calories" className="calories" type="number" value={this.state.value} onChange={this.handleChange} />
              </label>
              </h4> 
              </BiometricsDisplay>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <AlignRight>
                  <h3>
                    WEIGHT:
                  </h3>
                </AlignRight>
              </Col>
              <Col xs="6">
              {/* ** WEIGHT DISPLAY */}
              <BiometricsDisplay>
                <h4> 
                  <label>
                    <Input name="weight" className="weight" type="number" value={this.state.value} onChange={this.handleChange} />
                  </label>
                </h4> 
              </BiometricsDisplay>
            </Col>
          </Row>
          <div className="bottomSpacing"></div>
          {!(this.state.showStartTime )? null 
            : <SloganComponent />}
          {(!(this.state.showStartTime)) ? null 
            : <PauseSaveComponent onClickPause={ this.onPauseTimerToggle } onClickSave={ this.onSave }/>}
          {!(this.state.showStartTime) ? null 
            : <button type="submit" value="save">SAVE</button>}
        </form>
      </Container>
      </div>
    )
  }
}


