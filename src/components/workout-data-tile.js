import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import ExerciseInput from './exercise-input';
import Button from './button';

import * as actions from '../actions';

export function WorkoutDataTile(props) {
  //
  let newWorkoutType;
  let newWorkoutExercises;
  let newFirstExerciseWeight;
  let newSecondExerciseWeight;
  let newThirdExerciseWeight;

  if (props.mostRecentWorkoutType === 'a') {
    newWorkoutType = 'b';
    newWorkoutExercises = ['Squat', 'Overhead Press', 'Deadlift'];
  } else {
    newWorkoutType = 'a';
    newWorkoutExercises = ['Squat', 'Bench Press', 'Barbell Row'];
  }

  if (props.firstSuccess) {
    newFirstExerciseWeight = props.lastWorkout.firstWeight + 5;
  } else {
    newFirstExerciseWeight = props.lastWorkout.firstWeight;
  }

  if (props.secondSuccess) {
    newSecondExerciseWeight = props.lastWorkoutSameType.secondWeight + 5;
  } else {
    newSecondExerciseWeight = props.lastWorkoutSameType.secondWeight;
  }

  if (
    props.thirdSuccess &&
    props.lastWorkoutSameType.thirdExercise === 'Deadlift'
  ) {
    newThirdExerciseWeight = props.lastWorkoutSameType.thirdWeight + 10;
  } else if (props.thirdSuccess) {
    newThirdExerciseWeight = props.lastWorkoutSameType.thirdWeight + 5;
  } else {
    newThirdExerciseWeight = props.lastWorkoutSameType.thirdWeight;
  }

  const newExerciseWeights = [
    newFirstExerciseWeight,
    newSecondExerciseWeight,
    newThirdExerciseWeight,
  ];

  const firstInfo = {
    date: String(moment().format('MMM Do YYYY')),
    type: newWorkoutType,
    firstExercise: newWorkoutExercises[0],
    firstSets: props.currentExerciseSets,
    firstWeight: newFirstExerciseWeight,
    firstSucceeded: false,
  };

  const secondInfo = {
    secondExercise: newWorkoutExercises[1],
    secondSets: props.currentExerciseSets,
    secondWeight: newSecondExerciseWeight,
    secondSucceeded: false,
  };

  const thirdInfo = {
    thirdExercise: newWorkoutExercises[2],
    thirdSets: props.currentExerciseSets,
    thirdWeight: newThirdExerciseWeight,
    thirdSucceeded: false,
    bodyWeight: props.lastWorkout.bodyWeight,
  };

  if (
    props.currentExerciseSets.reduce((totalReps, set) => Number(totalReps) + Number(set)) === 25
  ) {
    firstInfo.firstSucceeded = true;
    secondInfo.secondSucceeded = true;
    thirdInfo.thirdSucceeded = true;
  } else {
    firstInfo.firstSucceeded = false;
    secondInfo.secondSucceeded = false;
    thirdInfo.thirdSucceeded = false;
  }
  if (props.lastWorkout.date === String(moment().format('MMM Do YYYY'))) {
    return (
      <div className="tile is-parent workout-data-tile">
        <article className="tile is-child notification has-text-left workout-data-section">
          <p className="title is-size-2">Enter your workout data...</p>
          <p className="subtitle is-size-6">
            Click each button to designate how many reps you completed for each
            set of the exercise. Make sure to update your weight after every
            workout in order to keep track of it.
          </p>
          <hr />
          <h1 className="subtitle">You have logged your workout for today!</h1>
        </article>
      </div>
    );
  }

  if (props.currentExerciseCounter < 2) {
    return (
      <div className="tile is-parent workout-data-tile">
        <article className="tile is-child notification has-text-left workout-data-section">
          <p className="title is-size-2">Enter your workout data...</p>
          <p className="subtitle is-size-6">
            Click each button to designate how many reps you completed for each
            set of the exercise. Make sure to update your weight after every
            workout in order to keep track of it.
          </p>
          <ExerciseInput
            exercise={newWorkoutExercises[props.currentExerciseCounter]}
            weight={newExerciseWeights[props.currentExerciseCounter]}
          />
          <Button
            newClasses="submit-button is-dark"
            text="Next Exercise"
            onClick={() =>
              props.dispatch(actions.nextExercise(props.currentExerciseCounter === 0 ? firstInfo : secondInfo))
            }
          />
        </article>
      </div>
    );
  } else if (props.currentExerciseCounter === 2) {
    return (
      <div className="tile is-parent workout-data-tile">
        <article className="tile is-child notification has-text-left workout-data-section">
          <p className="title is-size-2">Enter your workout data...</p>
          <p className="subtitle is-size-6">
            Click each button to designate how many reps you completed for each
            set of the exercise. Make sure to update your weight after every
            workout in order to keep track of it.
          </p>
          <ExerciseInput
            exercise={newWorkoutExercises[props.currentExerciseCounter]}
            weight={newExerciseWeights[props.currentExerciseCounter]}
          />
          <Button
            newClasses="submit-button is-dark"
            text="Save Workout"
            onClick={() => props.dispatch(actions.saveWorkout(thirdInfo))}
          />
        </article>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workouts: state.workouts,
  lastWorkout: state.workouts[state.workouts.length - 1],
  lastWorkoutSameType: state.workouts[state.workouts.length - 2],
  mostRecentWorkoutType: state.workouts[state.workouts.length - 1].type,
  firstSuccess: state.workouts[state.workouts.length - 1].firstSucceeded,
  secondSuccess: state.workouts[state.workouts.length - 2].secondSucceeded,
  thirdSuccess: state.workouts[state.workouts.length - 2].thirdSucceeded,
  currentExerciseCounter: state.currentExerciseCounter,
  currentExerciseSets: state.currentExerciseSets,
  newWorkout: state.newWorkout,
});

export default connect(mapStateToProps)(WorkoutDataTile);
