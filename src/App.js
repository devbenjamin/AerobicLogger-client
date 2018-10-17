import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import TimeReporting from './components/TimeReporting';
import Home from './AuthFolder/Home'
import SloganInputComponent from './components/SloganInputComponent';
// import { AuthContext } from './AuthFolder/AuthContext';
// import SessionComponent from './components/SessionComponent';
// import TimeFields from './components/TimeFields';

export default class App extends Component {
  constructor() {
    super();
    
    this.state = {
      sessionToken: '',
    }
  }

  
  setSessionState = (token) => {
    this.setState({ sessionToken: token });
 }
  
  logout = () => {
    this.setState({
      sessionToken: ''
    });
    localStorage.clear();
  }

  protectedViews = () => {
  console.log (localStorage.getItem('token'))
  // console.log('sessionToken:',this.state.sessionToken)
  if(this.state.sessionToken === localStorage.getItem("token")) { 
  return (
    <div>
      <Switch>
          <Route path="/" exact>
            <div>
              <TimeReporting />
              <SloganInputComponent /> 
            </div>
          </Route>
      </Switch>
    </div>
  )
    } else {
      return (
        <div>
          <Route path="/home" exact>
            <Home  setToken={this.setSessionState}/>
          </Route>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
       
          {/* <AuthContext.Provider value={this.state}> */}
          <div>
          <Router>
            <div>
            <NavBar clickLogout={this.logout}/>
            {this.protectedViews()}
            </div>
          </Router>
          {/* </AuthContext.Provider> */}
          </div>
      </div>
    )
  }
}


