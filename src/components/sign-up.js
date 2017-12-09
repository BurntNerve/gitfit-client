import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty, length, isTrimmed, isNumber } from '../validators';

import * as actions from '../actions';

export class SignUp extends React.Component {
  // handleSubmit(event) {
  //   event.preventDefault();
  //   const fullName = event.target.fullName.value;
  //   const currentWeight = event.target.currentWeight.value;
  //   const goalWeight = event.target.goalWeight.value;
  //   const username = event.target.username.value;
  //   const password = event.target.password.value;
  //
  //   const user = { fullName, currentWeight, goalWeight, username, password };
  //
  //   props
  //     .dispatch(actions.registerUser(user))
  //     .then(() => props.dispatch(actions.logInUser(username, password)));
  // }

  onSubmit(values) {
    const { username, password, fullName, currentWeight, goalWeight } = values;
    const user = { username, password, fullName, currentWeight, goalWeight };
    return this.props
      .dispatch(actions.registerUser(user))
      .then(() => this.props.dispatch(actions.logInUser(username, password)));
  }
  render() {
    return (
      <div>
        <section className="section sign-up-section">
          <div className="container sign-up-area has-text-left">
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
                {/* <div className="field-input">
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
                </div> */}
                <div className="field-input">
                  <label className="label is-medium" htmlFor="firstName">
                    Current Weight in lbs
                  </label>
                  <Field
                    component={Input}
                    type="text"
                    name="currentWeight"
                    validate={[required, nonEmpty, isTrimmed, isNumber]}
                  />
                </div>
                {/* <div className="field-input">
                  <label className="label is-medium">
                    Current Weight in lbs
                  </label>
                  <div className="control field-control">
                    <input
                      className="input is-medium"
                      type="text"
                      required
                      name="currentWeight"
                    />
                  </div>
                </div> */}
                <div className="field-input">
                  <label className="label is-medium" htmlFor="firstName">
                    Goal Weight in lbs
                  </label>
                  <Field
                    component={Input}
                    type="text"
                    name="goalWeight"
                    validate={[required, nonEmpty, isTrimmed, isNumber]}
                  />
                </div>
                {/* <div className="field-input">
                  <label className="label is-medium">Goal Weight in lbs</label>
                  <div className="control field-control">
                    <input
                      className="input is-medium"
                      type="text"
                      required
                      name="goalWeight"
                    />
                  </div>
                </div> */}
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
                    validate={[
                      required,
                      length({ min: 10, max: 72 }),
                      isTrimmed,
                    ]}
                  />
                </div>
                {/* <div className="field-input">
                  <label className="label is-medium">Password</label>
                  <div className="control field-control">
                    <input
                      className="input is-medium"
                      type="password"
                      required
                      name="password"
                    />
                  </div>
                </div> */}
                {/* <div className="field-input">
                  <label className="label is-medium" htmlFor="passwordConfirm">
                    Confirm password
                  </label>
                  <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matches('password')]}
                  />
                </div> */}
                <div className="control has-text-centered field-control">
                  {/* <Link to="/profile">
                    <Button
                      text="Submit"
                      newClasses="submit-button is-dark"
                      onClick={() => handleSubmit()}
                    />
                  </Link> */}
                  <button
                    type="submit"
                    className="button submit-button is-info"
                    disabled={this.props.pristine || this.props.submitting}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <p className="login-prompt has-text-black has-text-centered">
          Already have an account?{' '}
          <Link className="has-text-black" to="/registration/login">
            <strong className="has-text-info">Login</strong>
          </Link>
        </p>
      </div>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0])),
})(SignUp);
