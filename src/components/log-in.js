import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';
// import { connect } from 'react-redux';
// import Field from './field';
// import Button from './button';

import * as actions from '../actions';

export class LogIn extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(actions.logInUser(values.username, values.password));
  }
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const username = event.target.username.value;
  //   const password = event.target.password.value;
  //
  //   props.dispatch(actions.logInUser(username, password));
  // };
  render() {
    let error;
    console.log(this.props.error);
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <section className="section sign-up-section">
        <div className="container sign-up-area has-text-left">
          <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            {error}
            <div className="field">
              <div className="field-input">
                <label className="label is-medium" htmlFor="username">
                  Username
                </label>
                <Field
                  component={Input}
                  type="text"
                  name="username"
                  id="username"
                  validate={[required, nonEmpty]}
                />
              </div>
              {/* <div className="field-input">
                <label className="label is-medium">Username</label>
                <div className="control field-control">
                  <input
                    className="input is-medium"
                    type="text"
                    required
                    name="username"
                  />
                </div>
              </div> */}
              <div className="field-input">
                <label className="label is-medium" htmlFor="password">
                  Password
                </label>
                <Field
                  component={Input}
                  type="password"
                  name="password"
                  id="password"
                  validate={[required, nonEmpty]}
                />
                {/* <label className="label is-medium">Password</label>
                <div className="control field-control">
                  <input
                    className="input is-medium"
                    type="password"
                    required
                    name="password"
                  />
                </div> */}
              </div>
              <div className="control has-text-centered field-control">
                <button
                  type="submit"
                  className="button submit-button is-dark"
                  disabled={this.props.pristine || this.props.submitting}
                >
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')),
})(LogIn);
