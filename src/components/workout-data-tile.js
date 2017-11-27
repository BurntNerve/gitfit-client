import React from 'react';
import { connect } from 'react-redux';
import ExerciseInput from './exercise-input';
import Button from './button';

export function WorkoutDataTile(props) {
  //
  return (
    <div className="tile is-parent workout-data-tile">
      <article className="tile is-child notification has-text-left workout-data-section">
        <p className="title is-size-2">Enter your workout data...</p>
        <p className="subtitle is-size-6">
          Click each button to designate how many reps you completed for each
          set of the exercise. If you completed the entire exercise without
          failure just click the checkmark button to autofill the exercise.
        </p>
        <ExerciseInput exercise="Bench Press" weight="125" />
        <Button newClasses="submit-button is-dark" text="Next Exercise" />
      </article>
    </div>
  );
}

const mapStateToProps = state => ({
  workouts: state.workouts,
});

export default connect(mapStateToProps)(WorkoutDataTile);
