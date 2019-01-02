import React, { Component } from 'react';
import styled from 'styled-components';
// import Moment from 'react-moment';
// import 'moment-timezone';

const TimeHasStartButton = styled.div `
    background: #ddd;
    border-radius: 20px;
    width: 10em%
`

// let ElapsedTime = (timeZero) => {
//   // let epochTimeZero = new Date(Date.now()).toLocalTimeString();
//   console.log("timeZero in epoch ElapsedTime:",timeZero);
//   // console.log("epochTimeZero in toLocalTimeString elapsedTime:",epochTimeZero.toLocalTimeString());
//   (navigator.language, {hour: '2-digit', minute:'2-digit', second:'2-digit'});
//   // let returnedTime = date - timeZero;
//   // return returnedTime
//}

// componentDidMount() {
//   const _this = this;
//   this.timer = setInterval(function () {
//     let date = _this.getTimeString(); 
//     _this.setState({
//       timeZero: date,
//     })
//   }, 1000)



export default class ElapsedTime extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      time: 0,
      seconds: 0,
      minutes: 0,
      hours: 0
    };
  }
  
  
  // ElapsedTime = (props) => {
  //   console.log("timeZero in epoch ElapsedTime:",props.timeZero)
  // }
  // componentDidMount() {
  //   this.timer = setInterval(function () {
  //     let date = this.showElapsedTime(); 
  //     this.setState({ time: date })
  //   }, 1000)
  // }

  showElapsedTime = (props) => {
    let timeNow = new Date(Date.now());
    let elapsedEpochTime = timeNow - this.props.epochTimeZero;
    // let elapsedTime = new Date(elapsedEpochTime).toTimeString();
    // let pauseTime = 0
    // !this.props.pauseTimer ? pauseTime = new Date(Date.now()) 
    // : {
    // elapsedEpochTime = elapsedEpochTime - pauseTime;
    
    elapsedEpochTime = Math.floor(elapsedEpochTime/1000);

    this.setState({ hours: Math.floor(elapsedEpochTime / 3600) });

    this.setState({ minutes: Math.floor((elapsedEpochTime - (this.state.hours * 3600)) / 60) });

    this.setState({ seconds: elapsedEpochTime - (this.state.hours * 3600) - (this.state.minutes * 60) })
    
    
    // if(elapsedEpochTime)

    // return {
    //   min: Math.floor(elapsedEpochTime / 60).toString(),
    //   sec: Math.floor(elapsedEpochTime % 60).toString(),
    // }
    return elapsedEpochTime;
    // return elapsedTime;
  }
  componentDidMount() {
    let _this = this;
    this.timer = setInterval(function () {
      let date = _this.showElapsedTime(); 

      _this.setState({ time: date })
    }, 1000)
  }
 
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render(){
    return (
     
        <TimeHasStartButton>
          <h2>
          { this.state.hours }:{ ("0" + this.state.minutes).slice(-2) }:{ ("0" + this.state.seconds).slice(-2) }
          </h2>
        </TimeHasStartButton>
    
    )
  }
}


