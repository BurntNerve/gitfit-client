import React from 'react';
import { connect } from 'react-redux';
import Button from './button';
import ExerciseInput from './exercise-input';

import * as actions from '../actions';

export function LogData(props) {
  //
  const modalActive = () => {
    props.dispatch(actions.modalActive(props.index));
  };

  const deleteWorkout = () => {
    props.dispatch(actions.deleteWorkout(props.index));
  };

  return (
    <div className="timeline-item">
      <div className="timeline-marker" />
      <div className="timeline-content">
        <p className="heading is-size-5-mobile is-size-3-tablet">
          {props.logDataDate}
        </p>
        <p className="is-size-6-mobile is-size-4-tablet">
          {props.firstExercise}: {props.firstWeight}lbs
        </p>
        <p className="is-size-6-mobile is-size-4-tablet">
          {props.secondExercise}: {props.secondWeight}lbs
        </p>
        <p className="is-size-6-mobile is-size-4-tablet">
          {props.thirdExercise}: {props.thirdWeight}lbs
        </p>
        <p className="is-size-6-mobile is-size-4-tablet">
          Body Weight: {props.bodyWeight}lbs
        </p>
        <Button
          text="edit"
          newClasses="is-small"
          onClick={() => modalActive()}
        />
        <div className={`modal ${props.modalActive ? 'is-active' : ''}`}>
          <div className="modal-background" />
          <div className="modal-content edit-modal has-text-centered">
            <h1 className="title">Edit Workout</h1>
            <p className="subtitle">{props.logDataDate}</p>
            <hr />
            <ExerciseInput
              exercise={props.firstExercise}
              weight={props.firstWeight}
            />
            <hr />
            <ExerciseInput
              exercise={props.secondExercise}
              weight={props.secondWeight}
            />
            <hr />
            <ExerciseInput
              exercise={props.thirdExercise}
              weight={props.thirdWeight}
            />
            <hr />
            <Button
              text="Save Workout"
              newClasses="is-success saveWorkoutButton modalButton"
            />
            <Button
              text="Delete Workout"
              newClasses="is-danger deleteWorkoutButton modalButton"
              onClick={() => deleteWorkout(props.index)}
            />
          </div>
          <button className="modal-close is-large" aria-label="close" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  workouts: state.workouts,
  // modalActive: state.workouts[props.index].modalActive,
});

export default connect(mapStateToProps)(LogData);
