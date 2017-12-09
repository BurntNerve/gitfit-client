import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from './button';
import './hero.css';

export function Hero(props) {
  if (props.loggedIn) {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1 ">Fitness for Developers</h1>

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
        <div className="container has-text-left">
          <h1 className="title hero-title has-text-left is-size-1 has-text-white-bis">
            <strong>Fitness for Developers</strong>
          </h1>
          <h2 className="subtitle has-text-white-bis is-size-4">
            GitFit is a tech-oriented platform dedicated to helping people begin
            their fitness journey.
          </h2>

          <Link to="/registration">
            <strong>
              <Button
                text="Create Account"
                newClasses="sign-up is-medium is-success"
              />
            </strong>
          </Link>
          <Link to="/registration/login">
            <strong>
              <Button
                text="Login"
                newClasses="sign-up login is-medium is-danger"
              />
            </strong>
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
