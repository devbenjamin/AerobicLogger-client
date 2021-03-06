import React, { Component } from 'react';
import APIURL from '../helpers/environment';

export default class Register extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      token: '',
    }
  }

  onRegister = () => {
    const { token } = this.state.token;
    const { renderProtected } = this.props;
    renderProtected(token);
  }

  renderProtected = (token) => {
    this.setState({ token })
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleRegister = event => {
    event.preventDefault();

    let email = this.state.email
    let password = this.state.password
    let first = this.state.firstName
    let last = this.state.lastName

    let newUserData = { email: email, passwordHash: password, firstName: first, lastName: last }

    fetch(`${APIURL}/user/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUserData)
    })
    .then(response => response.json())
    .then(response => {console.log(response)
      let token = response.sessionToken
      console.log(token)
      localStorage.setItem('token', token)
      
      if(token !== undefined) {
        this.setState({
           sessionToken: token
        })
        // this.onRegister()
      }
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={
        this.handleRegister
      }>
        <div>
          Your Email Address
        </div>
        <input className="register-fields" name="email" type="text" placeholder="Enter Valid Email" onChange={this.handleOnChange}></input>

        <br />
        <div>
          Your Password
        </div>
        <input className="register-fields"name="password" type="password" placeholder="Enter New Password" onChange={this.handleOnChange}></input>
        
        <br />
        <div>
          Your First Name
        </div>
        <input className="register-fields"name="firstName" type="text" placeholder="First Name" onChange={this.handleOnChange}></input>

        <br />
        <div>
          Your Last Name
        </div>
        <input className="register-fields"name="lastName" type="text" placeholder="Last Name" onChange={this.handleOnChange}></input>

        <br /><br />

        <button className="register-button" type="submit">Register</button>
      </form>
      </div>
    )
  }
}

