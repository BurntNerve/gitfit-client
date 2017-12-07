import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Hero from './hero';
import LandingSection from './landing-section';

export function Landing(props) {
  if (props.loggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="landing">
      <Hero />
      <LandingSection section="First" />
      <LandingSection section="Second" />
      <LandingSection section="Third" />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.currentUser !== null,
});

export default connect(mapStateToProps)(Landing);
