import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import Field from './field';
// import Button from './button';

import * as actions from '../actions';

export function LogIn(props) {
  console.log(props.loggedIn);
  const handleSubmit = event => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    props.dispatch(actions.logInUser(username, password));
  };

  if (props.loggedIn) {
    console.log(props.loggedIn);
    return <Redirect to={{ pathname: '/profile' }} />;
  }
  return (
    <section className="section sign-up-section">
      <div className="container sign-up-area has-text-left">
        <form onSubmit={e => handleSubmit(e)}>
          <div className="field">
            <div className="field-input">
              <label className="label is-medium">Username</label>
              <div className="control field-control">
                <input
                  className="input is-medium"
                  type="text"
                  required
                  name="username"
                />
              </div>
            </div>
            <div className="field-input">
              <label className="label is-medium">Password</label>
              <div className="control field-control">
                <input
                  className="input is-medium"
                  type="password"
                  required
                  name="password"
                />
              </div>
            </div>
            <div className="control has-text-centered field-control">
              <input
                type="submit"
                className="button submit-button is-dark"
                value="Log In"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps)(LogIn);
