import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Terminal from './terminal';
import Button from './button';
import './hero.css';

export function Hero(props) {
  //
  if (props.loggedIn) {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered is-size-1">
              Fitness for Developers
            </h1>
            <Terminal />
            <Link to="/profile">
              <Button text="Dashboard" newClasses="sign-up is-medium is-dark" />
            </Link>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered is-size-1">
            Fitness for Developers
          </h1>
          <Terminal />
          <Link to="/registration">
            <Button text="Sign Up" newClasses="sign-up is-medium is-dark" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.currentUser !== null,
});

export default connect(mapStateToProps)(Hero);
