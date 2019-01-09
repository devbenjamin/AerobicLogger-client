import React, { Component } from 'react';
import styled from 'styled-components';
import APIURL from '../helpers/environment';

const SloganDiv = styled.div `
  height: 3em;
  margin: 20px;
  background: radial-gradient(#fceabb, #f8b500);
  background-repeat: no-repeat;
`
let sloganCount = 1;

class SloganComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSlogan: '',
      sloganList: [],
        }
  }
  // repeated below
  // allSloganFunc = () => {
  //   let url = `${APIURL}/slogan/getAll`
  //   fetch((url), {
  //     method: 'GET',
  //     headers: new Headers({
  //         'Content-Type': 'application/json',
  //         'Authorization': this.props.token
  //     })
  //   })
  //     .then(
  //       (response) => response.json()
  //     ).then(
  //       (data) => {
  //         console.log("data:",data)
  //         this.setState({ sloganList: data })
  //     })

  // }

  componentWillMount() {
    this.allSloganFunc()
  }

  allSloganFunc = () => {
    let url = `${APIURL}/slogan/getAll`
    fetch((url), {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': this.props.token
      })
    })
      .then(
        (response) => response.json()
      ).then(
        (data) => {
          console.log("data:",data)
          this.setState({ sloganList: data })
      })
  }
  
  componentDidMount() {
    console.log('componentdidmounty ', this.state.sloganList)
    let sloganCount = 0;
    setInterval(this.sloganFunc = () => {
      console.log('in sloganFunc:',this.state.sloganFunc)
      
      let innerSloganList = this.state.sloganList;
        if(sloganCount===this.state.sloganList.length) {
          sloganCount=0;}
      this.setState({ showSlogan: innerSloganList[sloganCount].title })
      sloganCount++;
    }, 5000)
    }
  
  

  //   let url = `${APIURL}/slogan/${sloganCount}`
  //   fetch((url), {
  //     method: 'GET',
  //     headers: new Headers({
  //         'Content-Type': 'application/json',
  //         'Authorization': this.props.token
  //     })
  //   })
  //     .then(
  //       (response) => response.json()
  //     ).then(
  //       (data) => {
  //         this.setState({ showSlogan: data })
  //     })
  //   sloganCount++;
  // }

  render(){
    return (
      <div>
        <h3>
          <SloganDiv>
              {this.state.showSlogan}
          </SloganDiv>
        </h3>
      </div> 
    ) 
  } 
}

export default SloganComponent;
