import React from 'react';
import { connect } from 'react-redux';
import Button from './button';
import ExerciseInput from './exercise-input';

import * as actions from '../actions';

export function LogData(props) {
  const modalActive = () => {
    console.log(props.index);
    props.dispatch(actions.modalActive(props.index));
  };

  const deleteWorkout = () => {
    props.dispatch(actions.deleteWorkout(props.index));
  };

  const currentWorkoutExercises =
    props.workout.type === 'a'
      ? ['Squat', 'Bench Press', 'Barbell Row']
      : ['Squat', 'Overhead Press', 'Deadlift'];

  const currentWorkoutWeights = [
    props.workout.firstWeight,
    props.workout.secondWeight,
    props.workout.thirdWeight,
  ];

  if (props.currentExerciseCounter < 2) {
    return (
      <div className="timeline-item">
        <div className="timeline-marker" />
        <div className="timeline-content">
          <p className="heading is-size-5-mobile is-size-3-tablet">
            {props.workout.date}
          </p>
          <p className="is-size-6-mobile is-size-4-tablet">
            {props.workout.firstExercise}: {props.workout.firstWeight}lbs{' '}
            {props.workout.firstSets.reduce((totalReps, set) => Number(totalReps) + Number(set)) === 25
              ? 'Completed'
              : 'Failed'}
          </p>
          <p className="is-size-6-mobile is-size-4-tablet">
            {props.workout.secondExercise}: {props.workout.secondWeight}lbs{' '}
            {props.workout.secondSets.reduce((totalReps, set) => Number(totalReps) + Number(set)) === 25
              ? 'Completed'
              : 'Failed'}
          </p>
          <p className="is-size-6-mobile is-size-4-tablet">
            {props.workout.thirdExercise}: {props.workout.thirdWeight}lbs{' '}
            {props.workout.thirdSets.reduce((totalReps, set) => Number(totalReps) + Number(set)) === 25
              ? 'Completed'
              : 'Failed'}
          </p>
          <p className="is-size-6-mobile is-size-4-tablet">
            Body Weight: {props.workout.bodyWeight}lbs
          </p>
          <Button
            text="Edit"
            newClasses="is-small is-danger"
            onClick={() => modalActive(props.index)}
          />
          <div
            className={`modal ${props.workout.modalActive ? 'is-active' : ''}`}
          >
            <div className="modal-background" />
            <div className="modal-content edit-modal has-text-centered">
              <h1 className="title">Edit Workout</h1>
              <p className="subtitle">{props.workout.date}</p>
              <hr />
              <ExerciseInput
                exercise={currentWorkoutExercises[props.currentExerciseCounter]}
                weight={currentWorkoutWeights[props.currentExerciseCounter]}
              />
              <Button
                newClasses="submit-button is-danger"
                text="Next Exercise"
                onClick={() =>
                  props.dispatch(actions.nextExercise(props.currentExerciseCounter === 0
                        ? { firstSets: props.currentExerciseSets }
                        : { secondSets: props.currentExerciseSets }))
                }
              />
              <hr />
              <Button
                text="Delete Workout"
                newClasses="is-profile-git deleteWorkoutButton modalButton"
                onClick={() => deleteWorkout(props.index)}
              />
            </div>
            <button className="modal-close is-large" aria-label="close" />
          </div>
        </div>
      </div>
    );
  } else if (props.currentExerciseCounter === 2) {
    return (
      <div className="timeline-item">
        <div className="timeline-marker" />
        <div className="timeline-content">
          <p className="heading is-size-5-mobile is-size-3-tablet">
            {props.workout.date}
          </p>
          <p className="is-size-6-mobile is-size-4-tablet">
            {props.workout.firstExercise}: {props.workout.firstWeight}lbs{' '}
            {props.workout.firstSets.reduce((totalReps, set) => Number(totalReps) + Number(set)) === 25
              ? 'Completed'
              : 'Failed'}
          </p>
          <p className="is-size-6-mobile is-size-4-tablet">
            {props.workout.secondExercise}: {props.workout.secondWeight}lbs{' '}
            {props.workout.secondSets.reduce((totalReps, set) => Number(totalReps) + Number(set)) === 25
              ? 'Completed'
              : 'Failed'}
          </p>
          <p className="is-size-6-mobile is-size-4-tablet">
            {props.workout.thirdExercise}: {props.workout.thirdWeight}lbs{' '}
            {props.workout.thirdSets.reduce((totalReps, set) => Number(totalReps) + Number(set)) === 25
              ? 'Completed'
              : 'Failed'}
          </p>
          <p className="is-size-6-mobile is-size-4-tablet">
            Body Weight: {props.workout.bodyWeight}lbs
          </p>
          <Button
            text="edit"
            newClasses="is-small"
            onClick={() => modalActive(props.index)}
          />
          <div
            className={`modal ${props.workout.modalActive ? 'is-active' : ''}`}
          >
            <div className="modal-background" />
            <div className="modal-content edit-modal has-text-centered">
              <h1 className="title">Edit Workout</h1>
              <p className="subtitle">{props.workout.date}</p>
              <hr />
              <ExerciseInput
                exercise={currentWorkoutExercises[props.currentExerciseCounter]}
                weight={currentWorkoutWeights[props.currentExerciseCounter]}
              />
              <Button
                newClasses="submit-button is-success"
                text="Update Workout"
                onClick={() =>
                  props.dispatch(actions.updateWorkout(
                      {
                        thirdSets: props.currentExerciseSets,
                      },
                      props.index,
                    ))
                }
              />
              <hr />
              <Button
                text="Delete Workout"
                newClasses="is-profile-git deleteWorkoutButton modalButton"
                onClick={() => deleteWorkout(props.index)}
              />
            </div>
            <button className="modal-close is-large" aria-label="close" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  workout: state.protectedReducer.data.workouts[props.index],
  currentExerciseSets: state.workoutReducer.currentExerciseSets,
  currentExerciseCounter: state.workoutReducer.currentExerciseCounter,
  newWorkout: state.workoutReducer.newWorkout,
});

export default connect(mapStateToProps)(LogData);
