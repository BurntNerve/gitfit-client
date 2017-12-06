import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BurgerMenu from './burger-menu';

import * as actions from '../actions';

import './navbar.css';

export class Navbar extends React.Component {
  render() {
    const handleLogOut = () => {
      this.props.dispatch(actions.handleLogOut());
    };

    if (!this.props.token) {
      return (
        <nav className="navbar is-fixed-top">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <h1 className="title is-size-4">
                <strong>GitFit</strong>
              </h1>
            </Link>
            <BurgerMenu onClick={() => console.log('clicked')} />
          </div>

          <div
            id="navbarThing"
            className={`navbar-menu ${
              this.props.burgerActive ? 'is-active' : ''
            }`}
          >
            <div className="navbar-start">
              <div className="navbar-item">
                <Link to="/registration/login">
                  <span className="control">
                    <span className="subtitle is-size-6">Login</span>
                  </span>
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/resources">
                  <span className="control">
                    <span className="subtitle is-size-6">Resources</span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="navbar-end" />
          </div>
        </nav>
      );
    }
    return (
      <nav className="navbar is-fixed-top">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <h1 className="title is-size-4">
              <strong>GitFit</strong>
            </h1>
          </Link>
          <BurgerMenu onClick={() => console.log('clicked')} />
        </div>

        <div
          id="navbarThing"
          className={`navbar-menu ${
            this.props.burgerActive ? 'is-active' : ''
          }`}
        >
          <div className="navbar-start">
            <div
              className="navbar-item log-out-button"
              onClick={() => handleLogOut()}
            >
              <span className="control">
                <span className="subtitle is-size-6">Log Out</span>
              </span>
            </div>
            <div className="navbar-item">
              <Link to="/profile">
                <span className="control">
                  <span className="subtitle is-size-6">Profile</span>
                </span>
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/resources">
                <span className="control">
                  <span className="subtitle is-size-6">Resources</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="navbar-end" />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  burgerActive: state.workoutReducer.activeClasses.burgerMenu,
  token: state.user.token,
});

export default connect(mapStateToProps)(Navbar);
