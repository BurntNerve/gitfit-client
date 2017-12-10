import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import {
  required,
  nonEmpty,
  length,
  isTrimmed,
  isNumber,
  isPositive,
} from '../validators';

import * as actions from '../actions';

export class SignUp extends React.Component {
  onSubmit(values) {
    const { username, password, fullName, currentWeight, goalWeight } = values;
    const user = { username, password, fullName, currentWeight, goalWeight };
    return this.props
      .dispatch(actions.registerUser(user))
      .then(() => this.props.dispatch(actions.logInUser(username, password)));
  }
  render() {
    let loading;
    if (this.props.submitting) {
      loading = 'is-loading';
    }
    return (
      <div>
        <section className="section sign-up-section">
          <div className="container sign-up-area has-text-left">
            <h2 className="title">After you sign up...</h2>
            <p className="subtitle">
              Make sure to head over to the{' '}
              <Link to="/resources">resources</Link> page and familiarize
              yourself with the workout routine GitFit uses, StrongLifts 5 x 5.
            </p>
            <form
              className="registration-form"
              onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values))}
            >
              <div className="field">
                <div className="field-input">
                  <label className="label is-medium" htmlFor="firstName">
                    Full Name
                  </label>
                  <Field component={Input} type="text" name="fullName" />
                </div>
                <div className="field-input">
                  <label className="label is-medium" htmlFor="firstName">
                    Current Weight in lbs
                  </label>
                  <Field
                    component={Input}
                    type="text"
                    name="currentWeight"
                    validate={[
                      required,
                      nonEmpty,
                      isTrimmed,
                      isNumber,
                      isPositive,
                    ]}
                  />
                </div>
                <div className="field-input">
                  <label className="label is-medium" htmlFor="firstName">
                    Goal Weight in lbs
                  </label>
                  <Field
                    component={Input}
                    type="text"
                    name="goalWeight"
                    validate={[
                      required,
                      nonEmpty,
                      isTrimmed,
                      isNumber,
                      isPositive,
                    ]}
                  />
                </div>
                <hr />
                <div className="field-input">
                  <label className="label is-medium" htmlFor="username">
                    Username
                  </label>
                  <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                  />
                </div>
                <div className="field-input">
                  <label className="label is-medium" htmlFor="password">
                    Password
                  </label>
                  <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[
                      required,
                      length({ min: 10, max: 72 }),
                      isTrimmed,
                    ]}
                  />
                </div>
                <div className="control has-text-centered field-control">
                  <button
                    type="submit"
                    className={`button submit-button is-danger ${loading}`}
                    disabled={this.props.pristine || this.props.submitting}
                  >
                    Submit
                  </button>
                </div>
                <p className="login-prompt has-text-black has-text-centered">
                  Already have an account?{' '}
                  <Link className="has-text-black" to="/registration/login">
                    <strong className="has-text-danger">Login</strong>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0])),
})(SignUp);
