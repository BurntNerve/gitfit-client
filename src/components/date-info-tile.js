import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

export function DateInfoTile(props) {
  if (props.lastWorkout) {
    return (
      <article className="tile is-child notification has-text-left">
        <p className="title is-size-2">
          {String(moment().format('MMM Do YYYY'))}
        </p>
        <p className="subtitle is-size-6">
          Last worked out on: {props.lastWorkout}
        </p>
      </article>
    );
  }
  return (
    <article className="tile is-child notification has-text-left">
      <p className="title is-size-2">
        {String(moment().format('MMM Do YYYY'))}
      </p>
      <p className="subtitle is-size-6">Begin logging workouts below.</p>
    </article>
  );
}

const mapStateToProps = state => {
  if (state.authReducer.currentUser.workouts.length > 0) {
    return {
      lastWorkout:
        state.authReducer.currentUser.workouts[
          state.authReducer.currentUser.workouts.length - 1
        ].date,
    };
  }
  return {
    lastWorkout: false,
  };
};

export default connect(mapStateToProps)(DateInfoTile);
