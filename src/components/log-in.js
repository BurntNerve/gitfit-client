import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import Input from './input';
import { required, nonEmpty } from '../validators';

import * as actions from '../actions';

export class LogIn extends React.Component {
  onSubmit(values) {
    this.props.dispatch(actions.triggerSubmitting());
    return this.props.dispatch(actions.logInUser(values.username, values.password));
  }
  render() {
    console.log(this.props.submitting);
    let loading;
    if (this.props.submitting) {
      console.log('submitting');
      loading = 'is-loading';
    }
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error has-text-danger" aria-live="polite">
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
              <div className="test-account-details has-text-centered">
                <h2 className="subtitle">Demo Account</h2>
                <p>
                  <strong>Username</strong>: test-user
                </p>
                <p>
                  <strong>Password</strong>: test-password
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  error: state.workoutReducer.activeClasses.warning,
  submitting: state.workoutReducer.activeClasses.submitting,
});

LogIn = connect(mapStateToProps)(LogIn);

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')),
})(LogIn);
