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
      showSlogan: ''
    }
  }
  
  componentDidMount() {
    const _this = this;
    this.timer = setInterval(function() {
      _this.sloganFunc();
    }, 2000)
  }

  sloganFunc = () => {
    if(sloganCount===5) sloganCount=1;
    
    let url = `h${APIURL}/slogan/${sloganCount}`
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
          this.setState({ showSlogan: data })
      })
    sloganCount++;
  }

  render(){
    return (
      <div>
        <h3>
          <SloganDiv>
            {this.state.showSlogan.title}
          </SloganDiv>
        </h3>
      </div> 
    ) 
  } 
}

export default SloganComponent;
