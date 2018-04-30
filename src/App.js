import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import './App.css';

class App extends Component {
  state = {
    redirectToReferrer: false
  };

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;
    console.log('this.props: ', this.props);
    console.log('from: ', from);
    console.log('redirectToReferrer: ', redirectToReferrer);

    if (redirectToReferrer) {
      console.log('Redirecting');
      return <Redirect to={from} />;
    }

    return (
      <div>
        {console.log('Made it')}
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Flying Crow Media Content Management System</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
            {
              isAuthenticated() && (

                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'upload')}
                >
                  Upload
                </Button>
              )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default App;
