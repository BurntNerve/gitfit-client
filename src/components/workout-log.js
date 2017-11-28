import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from './button';
import LogData from './log-data';

import './workout-log.css';

export function WorkoutLog(props) {
  const workouts = props.workouts.map((workout, index) => (
    <LogData
      key={index}
      index={index}
      logDataDate={props.workouts[index].date}
      firstExercise={props.workouts[index].firstExercise}
      firstSets={props.workouts[index].firstSets}
      firstReps={props.workouts[index].firstReps}
      firstWeight={props.workouts[index].firstWeight}
      secondExercise={props.workouts[index].secondExercise}
      secondSets={props.workouts[index].secondSets}
      secondReps={props.workouts[index].secondReps}
      secondWeight={props.workouts[index].secondWeight}
      thirdExercise={props.workouts[index].thirdExercise}
      thirdSets={props.workouts[index].thirdSets}
      thirdReps={props.workouts[index].thirdReps}
      thirdWeight={props.workouts[index].thirdWeight}
      bodyWeight={props.workouts[index].bodyWeight}
      modalActive={props.workouts[index].modalActive}
    />
  ));
  console.log(workouts);
  if (workouts.length > 0) {
    return (
      <section className="section timeline-section">
        <div className="container">
          <h1 className="title is-size-3-mobile is-size-1-tablet has-text-centered headline has-text-white-bis">
            Workout Log
          </h1>
          <Link to="/profile">
            <Button text="Profile" newClasses="is-medium" />
          </Link>
        </div>
        <div className="timeline is-centered">
          <header className="timeline-header">
            <span className="tag is-large is-size-4">Start</span>
          </header>
          {workouts}
          <div className="timeline-header">
            <span className="tag is-large is-size-4">Now</span>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="section timeline-section">
      <div className="container">
        <h1 className="title is-size-3-mobile is-size-1-tablet has-text-centered headline has-text-white-bis">
          Workout Log
        </h1>
        <Link to="/profile">
          <Button text="Profile" newClasses="is-medium" />
        </Link>
      </div>
      <div className="timeline is-centered">
        <header className="timeline-header">
          <span className="tag is-medium">Start</span>
        </header>
        <div className="timeline-item">
          <div className="timeline-marker" />
          <div className="timeline-content">
            <h1 className="title has-text-white-bis is-size-5-mobile">
              Start entering workout info!
            </h1>
          </div>
        </div>
        <div className="timeline-header">
          <span className="tag is-medium">Now</span>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  workouts: state.workouts,
});

export default connect(mapStateToProps)(WorkoutLog);
