import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BurgerMenu from './burger-menu';

import './navbar.css';

export class Navbar extends React.Component {
  render() {
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
              <p className="control">
                <Link to="/registration/login">
                  <span className="control">
                    <span className="subtitle is-size-6">Login</span>
                  </span>
                </Link>
              </p>
            </div>
            <div className="navbar-item">
              <div className="field is-grouped">
                <Link to="/resources">
                  <p className="control">
                    <span className="subtitle is-size-6">Resources</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-end" />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  burgerActive: state.activeClasses.burgerMenu,
});

export default connect(mapStateToProps)(Navbar);
