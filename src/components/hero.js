import React from 'react';
import { Link } from 'react-router-dom';
import Terminal from './terminal';
import Button from './button';
import './hero.css';

export default function Hero(props) {
  //
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered is-size-1">
            Fitness for Developers
          </h1>
          <Terminal />
          <Link to="/registration">
            <Button text="Sign Up" newClasses="sign-up is-medium is-dark" />
          </Link>
        </div>
      </div>
    </section>
  );
}
