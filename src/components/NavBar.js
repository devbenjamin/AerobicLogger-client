import React from 'react';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem 
  } from 'reactstrap';


  import { Route, Link, Switch, Router} from 'react-router-dom'
  import TimeReporting from './TimeReporting';
  import Home from '../AuthFolder/Home';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
 
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <div>
          <Navbar color="light" light expand="md">
            <Link to="/home">Home</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/">Time Reporting</Link>
                </NavItem>
                <NavItem className="logout" onClick={() => this.props.clickLogout()}>
                  Logout
                </NavItem> 
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem >
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>  */}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        {/* <div>
        <Switch>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/timereporting"><TimeReporting /></Route>
        </Switch> 
        </div> */}
      <div>
      
        </div>
      </div>
    );
  }
}

export default NavBar