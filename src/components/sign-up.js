import React from 'react';
import { Link } from 'react-router-dom';
import Field from './field';
import Button from './button';

export default function SignUp(props) {
  //
  return (
    <div>
      <section className="section sign-up-section">
        <div className="container sign-up-area has-text-left">
          <div className="field">
            <Field
              label="Full Name"
              placeholder="First and Last name"
              type="text"
            />
            <Field label="Current Weight" type="text" />
            <Field label="Goal Weight" type="text" />
            <hr />
            <Field label="Username" type="text" />
            <Field label="Password" type="password" />

            <div className="control has-text-centered field-control">
              <Link to="/profile">
                <Button text="Submit" newClasses="submit-button is-dark" />
              </Link>
            </div>
          </div>
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
