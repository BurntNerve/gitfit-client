import React from 'react';
import './resources.css';

export default function Resources(props) {
  //
  return (
    <section className="section resource-section">
      <div className="container has-text-left">
        <h1 className="title is-size-1">Resources</h1>
        <hr />
        <section className="section">
          <div className="container">
            <div className="columns nutrition-section">
              <div className="column">
                <h1 className="title has-text-white-bis">Nutrition</h1>
                <h2 className="subtitle has-text-white-bis">
                  If exercise is the fitness equivalent to commiting your code,
                  then nutrition is the equivalent to writing good code.
                  Nutrition improves the efficiency of your program.
                </h2>
              </div>
              <div className="column">
                <h1 className="title has-text-white-bis">Links:</h1>
                <h2 className="subtitle link">
                  <a
                    className="has-text-white-bis"
                    href="https://ss.fitness/#diet"
                  >
                    https://ss.fitness/#diet
                  </a>
                </h2>
                <h2 className="subtitle link">
                  <a
                    className="has-text-white-bis"
                    href="https://www.bodybuilding.com/fun/nutrient.htm"
                  >
                    https://www.bodybuilding.com/fun/nutrient.htm
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns exercise-section">
              <div className="column">
                <h1 className="title has-text-grey-darker">Exercise</h1>
                <h2 className="subtitle has-text-grey-darker">
                  The routine that this program uses is called Stronglifts 5 x
                  5. It is a program that assumes no previous experience and
                  will help you grow stronger quite quickly.
                </h2>
              </div>
              <div className="column">
                <h1 className="title has-text-grey-darker">Links:</h1>

                <h2 className="subtitle link">
                  <a
                    className="has-text-white-bis"
                    href="https://stronglifts.com/5x5/"
                  >
                    https://stronglifts.com/5x5/
                  </a>
                </h2>
                <h2 className="subtitle link">
                  <a
                    className="has-text-white-bis"
                    href="https://ss.fitness/#exercise"
                  >
                    https://ss.fitness/#exercise
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns nutrition-section">
              <div className="column">
                <h1 className="title has-text-white-bis">Rest</h1>
                <h2 className="subtitle has-text-white-bis">
                  Rest allows your body to process all the changes it has made
                  and implement them. The more high quality rest you get the
                  more your workouts will take effect. Rest and Nutrition are
                  what allow your hard work to pay off.
                </h2>
              </div>
              <div className="column">
                <h1 className="title has-text-white-bis">Links:</h1>
                <h2 className="subtitle link">
                  <a
                    className="has-text-white-bis"
                    href="https://www.psychologytoday.com/blog/finding-your-voice/201507/the-importance-rest"
                  >
                    https://www.psychologytoday.com/blog/finding-your-voice/201507/the-importance-rest
                  </a>
                </h2>
                <h2 className="subtitle link">
                  <a
                    className="has-text-white-bis"
                    href="http://healthysleep.med.harvard.edu/healthy/getting/overcoming/tips"
                  >
                    http://healthysleep.med.harvard.edu/healthy/getting/overcoming/tips
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
