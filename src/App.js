import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/navbar';
import Landing from './components/landing';
import Registration from './components/registration';
import Profile from './components/profile';
import Resources from './components/resources';
import WorkoutLog from './components/workout-log';
import Footer from './components/footer';
import './App.css';

import * as actions from './actions';

export class App extends Component {
  componentDidMount() {
    const authToken = localStorage.getItem('token');
    const userInfo = localStorage.getItem('userInfo');
    const loggedIn = localStorage.getItem('loggedIn');
    this.props.dispatch(actions.loginUserSuccess(authToken, userInfo, loggedIn));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route path="/registration" component={Registration} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/log" component={WorkoutLog} />
          <Footer />
        </div>
      </Router>
    );
  }
}

// export default App;
export default connect()(App);
