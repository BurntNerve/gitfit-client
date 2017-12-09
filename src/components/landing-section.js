import React from 'react';
import './landing-section.css';

export default function LandingSection(props) {
  if (props.section === 'First') {
    return (
      <section className="section firstContent">
        <div className="container">
          <div className="columns">
            <div className="column has-vertically-aligned-content has-text-left">
              <h1 className="title is-size-3-mobile is-size-1-tablet">
                Commit.
              </h1>
              <h2 className="subtitle">
                Exercise is version control for the body. Every time you workout
                you are creating new changes ready to be added to the nervous
                system.
              </h2>
            </div>
            <div className="column has-text-centered has-vertically-aligned-content">
              <figure className="image is-16by9">
                <img
                  src="https://images.unsplash.com/photo-1492632833879-ffead221b059?auto=format&fit=crop&w=2552&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                  alt="man stretching"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (props.section === 'Second') {
    return (
      <section className="section secondContent is-background-git">
        <div className="container">
          <div className="columns">
            <div className="column has-text-centered has-vertically-aligned-content">
              <figure className="image is-16by9">
                <img
                  src="https://images.unsplash.com/photo-1463214551910-9d4d4e4ee844?auto=format&fit=crop&w=2550&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                  alt="woman doing yoga by the beach"
                />
              </figure>
            </div>
            <div className="column has-vertically-aligned-content has-text-right">
              <h1 className="title is-size-3-mobile is-size-1-tablet">Push.</h1>
              <h2 className="subtitle">
                Rest allows our bodies to process these changes. As we sleep our
                muscles rebuild and our bodies grow stronger.
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (props.section === 'Third') {
    return (
      <section className="section thirdContent">
        <div className="container">
          <div className="columns">
            <div className="column has-vertically-aligned-content has-text-left">
              <h1 className="title is-size-3-mobile is-size-1-tablet">Pull.</h1>
              <h2 className="subtitle">
                We reap the changes we commit to ourselves. Exercise allows us
                to steer the changes made every day to our body in a direction
                that is beneficial.
              </h2>
            </div>
            <div className="column has-text-centered has-vertically-aligned-content">
              <figure className="image is-16by9">
                <img
                  src="https://images.unsplash.com/photo-1488401318902-f7feae66db20?auto=format&fit=crop&w=2579&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                  alt="person taking a break from biking"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
