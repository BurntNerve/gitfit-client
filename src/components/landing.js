import React from 'react';
import Hero from './hero';
import LandingSection from './landing-section';

export default function Landing(props) {
  return (
    <div className="landing">
      <Hero />
      <LandingSection section="First" />
      <LandingSection section="Second" />
      <LandingSection section="Third" />
    </div>
  );
}
