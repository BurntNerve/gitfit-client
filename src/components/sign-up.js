import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import Field from './field';
// import Button from './button';

import * as actions from '../actions';

export function SignUp(props) {
  const handleSubmit = event => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const currentWeight = event.target.currentWeight.value;
    const goalWeight = event.target.goalWeight.value;
    const username = event.target.username.value;
    const password = event.target.password.value;

    props.dispatch(actions.registerUser(
      fullName,
      currentWeight,
      goalWeight,
      username,
      password,
    ));
  };

  return (
    <div>
      <section className="section sign-up-section">
        <div className="container sign-up-area has-text-left">
          <form onSubmit={e => handleSubmit(e)}>
            <div className="field">
              <div className="field-input">
                <label className="label is-medium">Full Name</label>
                <div className="control field-control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="First and last name"
                    required
                    name="fullName"
                  />
                </div>
              </div>
              <div className="field-input">
                <label className="label is-medium">Current Weight in lbs</label>
                <div className="control field-control">
                  <input
                    className="input is-medium"
                    type="text"
                    required
                    name="currentWeight"
                  />
                </div>
              </div>
              <div className="field-input">
                <label className="label is-medium">Goal Weight in lbs</label>
                <div className="control field-control">
                  <input
                    className="input is-medium"
                    type="text"
                    required
                    name="goalWeight"
                  />
                </div>
              </div>
              <hr />
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
                {/* <Link to="/profile">
                  <Button
                    text="Submit"
                    newClasses="submit-button is-dark"
                    onClick={() => handleSubmit()}
                  />
                </Link> */}
                <input
                  type="submit"
                  className="button submit-button is-dark"
                  value="Sign Up"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
      <p className="login-prompt has-text-white-bis has-text-centered">
        Already have an account?{' '}
        <Link className="has-text-info" to="/registration/login">
          <strong>Login</strong>
        </Link>
      </p>
    </div>
  );
}

const mapStateToProps = state => ({
  signedIn: state.user.signedIn,
});

export default connect(mapStateToProps)(SignUp);
