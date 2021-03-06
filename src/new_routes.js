import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Upload from './Upload/Upload';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/upload",
    component: Upload
  },
  {
    path: "/callback",
    component: Callback
  }
];

export const makeMainRoutes = route => {
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />

  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/upload" render={(props) => <Upload auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
          {routes.map((route, i) => <makeMainRoutes key={i} {...route} />)}
        </div>
      </Router>
  );
}
