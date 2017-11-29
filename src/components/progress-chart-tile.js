import React from 'react';
import { connect } from 'react-redux';
import WeightField from './weight-field';

export function ProgressChartTile(props) {
  if (props.workouts.length > 0) {
    let change;
    let changePercent;
    const progress = () => {
      //
      const goalAmount = props.goals.goalWeight - props.goals.startingWeight;
      const progressAmount =
        props.mostRecentWeight - props.goals.startingWeight;
      changePercent = progressAmount / props.goals.startingWeight * 100;
      const progressPercent = progressAmount / goalAmount * 100;
      if (props.mostRecentWeight > props.goals.startingWeight) {
        change = 'up';
      } else {
        change = 'down';
      }
      return progressPercent.toFixed(2);
    };
    progress();
    return (
      <div className="tile is-parent">
        <article className="tile is-child notification has-text-centered">
          <p className="title is-size-2">Weight</p>
          <h2 className="title is-size-5 has-text-left">
            You are {change}{' '}
            <span className={`${change}`}>{changePercent.toFixed(2)}%</span> of
            your initial weight.
          </h2>
          <h2 className="title is-size-5 has-text-left">
            You are <span className={`${change}`}>{progress()}%</span> of the
            way to your goal weight.
          </h2>
          <label className="label has-text-left">Add your weight in lbs.</label>
          <WeightField />
        </article>
      </div>
    );
  }
  return (
    <div className="tile is-parent">
      <article className="tile is-child notification has-text-centered">
        <p className="title is-size-2">Weight</p>
        <h2 className="title is-size-5 has-text-left">
          Initial Weight: {props.goals.startingWeight}lbs
        </h2>
        <h2 className="title is-size-5 has-text-left">
          Goal Weight: {props.goals.goalWeight}lbs
        </h2>
        <label className="label has-text-left">Add your weight in lbs.</label>
        <WeightField />
      </article>
    </div>
  );
}

const mapStateToProps = state => {
  if (state.workoutReducer.workouts.length > 0) {
    return {
      workouts: state.workoutReducer.workouts,
      goals: state.workoutReducer.goals,
      mostRecentWeight:
        state.workoutReducer.workouts[state.workoutReducer.workouts.length - 1]
          .bodyWeight,
    };
  }
  return {
    workouts: state.workoutReducer.workouts,
    goals: state.workoutReducer.goals,
    mostRecentWeight: state.workoutReducer.goals.startingWeight,
  };
};

export default connect(mapStateToProps)(ProgressChartTile);
