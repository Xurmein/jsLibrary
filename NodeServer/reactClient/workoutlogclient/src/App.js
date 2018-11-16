import React, { Component } from 'react';
import Auth from './auth/Auth';
import SiteBar from './home/SiteBar';
import Splash from './home/Splash';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


class App extends Component {
  constructor(){
    super();
    this.state = {
      sessionToken: ''
    }
  }

  componentWillMount(){
    const token = localStorage.getItem('token');
    if(token && !this.state.sessionToken){
        this.setState({ sessionToken: token });
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  protecedViews = () => {
    if(this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path='/' exact>
            <Splash sessionToken={this.state.sessionToken} />
          </Route>
        </Switch>
      )
    } else {
      return(
        <Route path="/auth" >
          <Auth setToken={this.setSessionState} />
        </Route>
      )
    }
  }

  logout = () => {
    this.setState({
      sessionToken: '',
    });
    localStorage.clear();
  }

  render() {
    return (
      <Router>
        <div>
          <SiteBar clickLogout={this.logout} />
          {this.protecedViews()}
        </div>
      </Router>
    );
  }
}

export default App;