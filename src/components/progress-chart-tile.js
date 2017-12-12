import React from 'react';
import { connect } from 'react-redux';
import WeightField from './weight-field';

export function ProgressChartTile(props) {
  if (props.workouts.length > 0) {
    let change;
    let changePercent;
    let colorClass;
    const progress = () => {
      const goalAmount = props.goalWeight - props.startingWeight;
      const progressAmount = props.mostRecentWeight - props.startingWeight;
      changePercent = progressAmount / props.startingWeight * 100;
      const progressPercent = progressAmount / goalAmount * 100;
      if (Number(props.mostRecentWeight) > Number(props.startingWeight)) {
        change = 'up';
        colorClass = 'has-text-success';
      } else {
        change = 'down';
        colorClass = 'has-text-danger';
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
            <span className={`${colorClass}`}>{changePercent.toFixed(2)}%</span>{' '}
            of your initial weight.
          </h2>
          <h2 className="title is-size-5 has-text-left">
            You are <span className={`${colorClass}`}>{progress()}%</span> of
            the way to your goal weight.
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
          Initial Weight: {props.startingWeight}lbs
        </h2>
        <h2 className="title is-size-5 has-text-left">
          Goal Weight: {props.goalWeight}lbs
        </h2>
        <label className="label has-text-left">Add your weight in lbs.</label>
        <WeightField />
      </article>
    </div>
  );
}

const mapStateToProps = state => {
  if (state.authReducer.currentUser.workouts.length > 0) {
    return {
      workouts: state.authReducer.currentUser.workouts,

      startingWeight: state.authReducer.currentUser.currentWeight,
      goalWeight: state.authReducer.currentUser.goalWeight,
      mostRecentWeight:
        state.authReducer.currentUser.workouts[
          state.authReducer.currentUser.workouts.length - 1
        ].bodyWeight,
    };
  }
  return {
    workouts: state.authReducer.currentUser.workouts,
    startingWeight: state.authReducer.currentUser.currentWeight,
    goalWeight: state.authReducer.currentUser.goalWeight,
    mostRecentWeight: state.authReducer.currentUser.currentWeight,
  };
};

export default connect(mapStateToProps)(ProgressChartTile);
