import React from 'react';
import { connect } from 'react-redux';

export class WorkoutStatsTile extends React.Component {
  render() {
    if (this.props.workouts) {
      let strongestLift;
      const strongestLiftWeight = Math.max(
        this.props.mostRecentWorkout.firstWeight,
        this.props.mostRecentWorkout.secondWeight,
        this.props.mostRecentWorkout.thirdWeight,
      );

      if (strongestLiftWeight === this.props.mostRecentWorkout.firstWeight) {
        strongestLift = this.props.mostRecentWorkout.firstExercise;
      } else if (
        strongestLiftWeight === this.props.mostRecentWorkout.secondWeight
      ) {
        strongestLift = this.props.mostRecentWorkout.secondExercise;
      } else if (
        strongestLiftWeight === this.props.mostRecentWorkout.thirdWeight
      ) {
        strongestLift = this.props.mostRecentWorkout.thirdExercise;
      }

      const totalWeightMoved = this.props.workouts
        .reduce((totalWeight, workout) => {
          const firstExerciseWeight =
            workout.firstSets.reduce((firstTotalWeight, reps) => firstTotalWeight + reps) * workout.firstWeight;
          const secondExerciseWeight =
            workout.secondSets.reduce((secondTotalWeight, reps) => secondTotalWeight + reps) * workout.secondWeight;

          const thirdExerciseWeight =
            workout.thirdSets.reduce((thirdTotalWeight, reps) => thirdTotalWeight + reps) * workout.thirdWeight;

          const totalWorkoutWeight =
            firstExerciseWeight + secondExerciseWeight + thirdExerciseWeight;
          return totalWeight + totalWorkoutWeight;
        }, 0)
        .toLocaleString();

      const bodyWeighToLiftRatio =
        strongestLiftWeight / this.props.mostRecentWorkout.bodyWeight;
      return (
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title is-size-2">Workout Statistics</p>
              <div className="content has-text-left">
                <h2>
                  <strong>Total Weight Moved</strong>
                </h2>
                <hr />
                <p className="is-size-4">{totalWeightMoved}lbs</p>
                <h2>
                  <strong>Strongest Lift</strong>
                </h2>
                <hr />
                <p className="is-size-4">
                  {strongestLift}: {strongestLiftWeight}lbs
                </p>
                <p>{bodyWeighToLiftRatio.toFixed(2)}x your body-weight.</p>
                <h2>
                  <strong>Total Workouts</strong>
                </h2>
                <hr />
                <p className="is-size-4">{this.props.totalWorkouts}</p>
              </div>
            </div>
          </article>
        </div>
      );
    }
    return (
      <div className="tile is-parent">
        <article className="tile is-child notification">
          <div className="content">
            <p className="title is-size-2">Workout Statistics</p>
            <div className="content has-text-left">
              <h2>
                <strong>Total Weight Moved</strong>
              </h2>
              <hr />
              <p className="is-size-4">0lbs</p>
              <h2>
                <strong>Strongest Lift</strong>
              </h2>
              <hr />
              <p className="is-size-4">None</p>
              <h2>
                <strong>Total Workouts</strong>
              </h2>
              <hr />
              <p className="is-size-4">0</p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   workouts: state.workouts,
//   totalWorkouts: state.workouts.length,
// });

const mapStateToProps = state => {
  if (state.workouts.length > 0) {
    return {
      workouts: state.workouts,
      totalWorkouts: state.workouts.length,
      mostRecentWorkout: state.workouts[state.workouts.length - 1],
    };
  }
  return {
    workouts: false,
  };
};

export default connect(mapStateToProps)(WorkoutStatsTile);
