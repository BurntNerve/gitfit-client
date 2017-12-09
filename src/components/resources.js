import React from 'react';
import './resources.css';

export default function Resources() {
  return (
    <section className="section resource-section is-profile-git">
      <div className="container has-text-left">
        <h1 className="title is-size-1 has-text-white-bis">Resources</h1>
        <hr />
        <section className="section">
          <div className="container">
            <div className="columns odd-section">
              <div className="column">
                <h1 className="title">Form</h1>
                <h2 className="subtitle">
                  The following three sections are the core tenents of leading a
                  healthy lifestyle. However, Form is what allows you to capture
                  the full benefits of your movements as well as give you the
                  best chance of preventing injury. Since our goal is to improve
                  our bodies, minimizing the risk of injury is of paramount
                  importance.
                </h2>
              </div>
              <div className="column">
                <h1 className="title">Links:</h1>
                <h2 className="subtitle link">
                  <a
                    className="is-size-4"
                    href="https://www.youtube.com/watch?v=EP2g3Sj3qSw"
                  >
                    Complete Video Of Workout A
                  </a>
                </h2>
                <h2 className="subtitle link">
                  <a
                    className="is-size-4"
                    href="https://www.youtube.com/watch?v=ro3Mh9o7JPU"
                  >
                    Complete Video Of Workout B
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns even-section">
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
                    className="is-size-4 even-link"
                    href="https://ss.fitness/#diet"
                  >
                    SimpleScience.com - Diet Advice
                  </a>
                </h2>
                <h2 className="subtitle link">
                  <a
                    className="is-size-4 even-link"
                    href="https://www.bodybuilding.com/fun/nutrient.htm"
                  >
                    Bodybuilding.com - Nutrition Advice
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns odd-section">
              <div className="column">
                <h1 className="title">Exercise</h1>
                <h2 className="subtitle">
                  The routine that this program uses is called Stronglifts 5 x
                  5. It is a program that assumes no previous experience and
                  will help you grow stronger quite quickly.
                </h2>
              </div>
              <div className="column">
                <h1 className="title">Links:</h1>

                <h2 className="subtitle link">
                  <a className="is-size-4" href="https://stronglifts.com/5x5/">
                    Stronglifts.com - 5x5 Exercise Routine
                  </a>
                </h2>
                <h2 className="subtitle link">
                  <a className="is-size-4" href="https://ss.fitness/#exercise">
                    SimpleScience.com - Importance of Exercise
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns even-section">
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
                    className="is-size-4 even-link"
                    href="https://www.psychologytoday.com/blog/finding-your-voice/201507/the-importance-rest"
                  >
                    PhsycologyToday.com - The Importance of Rest
                  </a>
                </h2>
                <h2 className="subtitle link">
                  <a
                    className="even-link is-size-4"
                    href="http://healthysleep.med.harvard.edu/healthy/getting/overcoming/tips"
                  >
                    Harvard Medical - How to get Healthy Sleep
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
