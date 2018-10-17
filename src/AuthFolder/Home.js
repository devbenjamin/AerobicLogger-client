import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

// import NavBar from '../components/NavBar';
// import { AuthContext } from './AuthContext';
// import styled from 'styled-components';

import React, { Component } from 'react';
// import { homedir } from 'os';
import Register from './Register'
import { ThemeProvider } from 'styled-components';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      email: '',
      passwordHash: '',
      token: '',
      first: '',
      sessionToken: ''
    }
  }

  onRegistration = (token) => {
    this.setState({ token })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
        email: this.state.email,
        passwordHash: this.state.passwordHash 
      })
    })
      .then(response => response.json())
      .then(data => {
        let token = data.sessionToken


        localStorage.setItem(
          'token', token,
        )
        const { setToken } = this.props;
        // const { setToken} = this.state;

        this.props.setToken(token)

        // this.setState({ data: data, token: token })
        // const { setToken } = this.props;
        // setToken( token );
        
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form" onSubmit={this.handleSubmit} >
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"  //change this to email later ******** !!!!!!!!!!!!!
                name="email"
                id="Email"
                placeholder="YourEmail@email.com"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="passwordHash"
                id="Password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>

        <br /><br />

        <h2>Register</h2>
        <div>
          <Register onRegister={this.onRegistration} />
        </div>
      </Container>
    );
  }
}

// export default props => (
//   <AuthContext.Consumer>
//       {auth => <Home {...props} auth={auth} />}
//   </AuthContext.Consumer>
// );

export default Home;
