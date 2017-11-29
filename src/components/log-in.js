import React from 'react';
import { Link } from 'react-router-dom';
import Field from './field';
import Button from './button';

export default function LogIn(props) {
  //
  return (
    <section className="section sign-up-section">
      <div className="container sign-up-area has-text-left">
        <div className="field">
          <Field type="text" label="Username" />
          <Field type="password" label="Password" />
          <div className="control has-text-centered field-control">
            <Link to="/profile">
              <Button text="Submit" newClasses="submit-button is-dark" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
