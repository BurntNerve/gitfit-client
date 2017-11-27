import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './sign-up';
import LogIn from './log-in';
import './registration.css';

export default function Registration(props) {
  //
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
