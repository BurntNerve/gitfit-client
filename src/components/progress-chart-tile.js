import React from 'react';
import { connect } from 'react-redux';

export function ProgressChartTile(props) {
  if (props.mostRecentWeight) {
    const { startingWeight, goalWeight } = props.goals;
    let change;
    let changePercent;
    const progress = () => {
      //
      const goalAmount = goalWeight - startingWeight;
      const progressAmount = props.mostRecentWeight - startingWeight;
      changePercent = progressAmount / startingWeight * 100;
      const progressPercent = progressAmount / goalAmount * 100;
      if (props.mostRecentWeight > startingWeight) {
        change = 'up';
      } else {
        change = 'down';
      }
      return progressPercent.toFixed(2);
    };
    console.log(progress());
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
      </article>
    </div>
  );
}

// const mapStateToProps = state => ({
//   goals: state.goals,
//   mostRecentWeight: state.workouts[state.workouts.length - 1].bodyWeight,
// });

const mapStateToProps = state => {
  if (state.workouts.length > 0) {
    return {
      goals: state.goals,
      mostRecentWeight: state.workouts[state.workouts.length - 1].bodyWeight,
    };
  }
  return {
    goals: state.goals,
    mostRecentWeight: false,
  };
};

export default connect(mapStateToProps)(ProgressChartTile);
