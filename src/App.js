import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
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
  // componentDidMount() {
  //   const authToken = localStorage.getItem('token');
  //   const userInfo = localStorage.getItem('userInfo');
  //   const loggedIn = localStorage.getItem('loggedIn');
  //   this.props.dispatch(actions.loginUserSuccess(authToken, userInfo, loggedIn));
  // }
  componentDidMount() {
    if (this.props.hasAuthToken) {
      this.props.dispatch(actions.refreshAuthToken());
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(actions.refreshAuthToken()),
      60 * 60 * 1000, // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route path="/registration" component={Registration} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/log" component={WorkoutLog} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.authReducer.authToken !== null,
  loggedIn: state.authReducer.currentUser !== null,
});

// export default App;
export default withRouter(connect(mapStateToProps)(App));
