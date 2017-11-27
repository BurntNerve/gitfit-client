import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Landing from './components/landing';
import Registration from './components/registration';
import Profile from './components/profile';
import Resources from './components/resources';
import WorkoutLog from './components/workout-log';
import Footer from './components/footer';
import './App.css';

class App extends Component {
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

export default App;
