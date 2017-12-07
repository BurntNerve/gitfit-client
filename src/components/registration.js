import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import SignUp from './sign-up';
import LogIn from './log-in';
import './registration.css';

export function Registration(props) {
  //
  if (props.loggedIn) {
    console.log(props.loggedIn);
    return <Redirect to={{ pathname: '/profile' }} />;
  }
  return (
    <section className="section sign-up-container">
      <div className="container">
        <h1 className="title has-text-white-bis is-size-2-mobile is-size-1-tablet has-text-centered">
          Start your life.
        </h1>
      </div>
      <Route exact path="/registration" component={SignUp} />
      <Route exact path="/registration/login" component={LogIn} />
    </section>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.currentUser !== null,
});

export default connect(mapStateToProps)(Registration);
