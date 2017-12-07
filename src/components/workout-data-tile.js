import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import ExerciseInput from './exercise-input';
import Button from './button';

import * as actions from '../actions';

export function WorkoutDataTile(props) {
  //
  const handleSaveWorkout = workoutInfo => {
    //
    props.dispatch(actions.saveWorkout(workoutInfo));
  };

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
    username: props.currentUser,
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
    bodyWeight: props.lastWorkout.bodyWeight || props.goals.startingWeight,
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
            onClick={() => handleSaveWorkout(thirdInfo)}
          />
        </article>
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.authReducer.currentUser.workouts.length === 0) {
    return {
      currentUser: state.authReducer.currentUser.username,
      workouts: state.authReducer.workouts,
      goals: {
        startingWeight: state.authReducer.currentUser.currentWeight,
        goalWeight: state.authReducer.currentUser.goalWeight,
      },
      lastWorkout: {
        firstWeight: 45,
        secondWeight: 45,
        thirdWeight: 45,
      },
      lastWorkoutSameType: {
        firstWeight: 45,
        secondWeight: 45,
        thirdWeight: 45,
      },
      currentExerciseSets: state.workoutReducer.currentExerciseSets,
      currentExerciseCounter: state.workoutReducer.currentExerciseCounter,
      newWorkout: state.workoutReducer.newWorkout,
    };
  } else if (state.authReducer.currentUser.workouts.length === 1) {
    return {
      currentUser: state.authReducer.currentUser.username,
      workouts: state.authReducer.currentUser.workouts,
      goals: state.workoutReducer.goals,
      lastWorkout:
        state.authReducer.currentUser.workouts[
          state.authReducer.currentUser.workouts.length - 1
        ],
      lastWorkoutSameType: {
        firstWeight: 45,
        secondWeight: 45,
        thirdWeight: 45,
      },
      mostRecentWorkoutType:
        state.authReducer.currentUser.workouts[
          state.authReducer.currentUser.workouts.length - 1
        ].type || 'a',
      firstSuccess:
        state.authReducer.currentUser.workouts[
          state.authReducer.currentUser.workouts.length - 1
        ].firstSucceeded,
      secondSuccess: false,
      thirdSuccess: false,
      currentExerciseCounter: state.workoutReducer.currentExerciseCounter,
      currentExerciseSets: state.workoutReducer.currentExerciseSets,
      newWorkout: state.workoutReducer.newWorkout,
    };
  }
  return {
    currentUser: state.authReducer.currentUser.username,
    workouts: state.authReducer.currentUser.workouts,
    lastWorkout:
      state.authReducer.currentUser.workouts[
        state.authReducer.currentUser.workouts.length - 1
      ],
    lastWorkoutSameType:
      state.authReducer.currentUser.workouts[
        state.authReducer.currentUser.workouts.length - 2
      ],
    mostRecentWorkoutType:
      state.authReducer.currentUser.workouts[
        state.authReducer.currentUser.workouts.length - 1
      ].type || 'a',
    firstSuccess:
      state.authReducer.currentUser.workouts[
        state.authReducer.currentUser.workouts.length - 1
      ].firstSucceeded,
    secondSuccess:
      state.authReducer.currentUser.workouts[
        state.authReducer.currentUser.workouts.length - 2
      ].secondSucceeded ||
      state.authReducer.currentUser.workouts[
        state.authReducer.currentUser.workouts.length - 1
      ].secondSucceeded,
    thirdSuccess:
      state.authReducer.currentUser.workouts[
        state.authReducer.currentUser.workouts.length - 2
      ].thirdSucceeded,
    currentExerciseCounter: state.workoutReducer.currentExerciseCounter,
    currentExerciseSets: state.workoutReducer.currentExerciseSets,
    newWorkout: state.workoutReducer.newWorkout,
  };
};

export default connect(mapStateToProps)(WorkoutDataTile);
