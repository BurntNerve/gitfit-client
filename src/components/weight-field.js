import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

export class WeightField extends React.Component {
  //

  render() {
    const verifyWeight = weightInput => {
      console.log(typeof weightInput);
      if (
        weightInput === '' ||
        Number(weightInput) !== parseInt(weightInput, 10)
      ) {
        this.weightField.value = '';
        this.props.dispatch(actions.triggerWarning('Enter a number.'));
      } else if (this.props.empty) {
        this.weightField.value = '';
        this.props.dispatch(actions.triggerWarning('Workout once first.'));
      } else {
        this.props.dispatch(actions.updateWeight(weightInput));
        this.weightField.value = '';
        this.props.dispatch(actions.triggerWarning(undefined));
      }
    };
    return (
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            required
            type="text"
            placeholder={`${this.props.warning ||
              this.props.mostRecent.bodyWeight}`}
            ref={node => {
              this.weightField = node;
            }}
          />
        </div>
        <div
          role="button"
          className="control"
          onClick={() => verifyWeight(this.weightField.value)}
        >
          <a className="button is-danger">Update</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.authReducer.currentUser.workouts.length > 0) {
    return {
      empty: false,
      mostRecent:
        state.authReducer.currentUser.workouts[
          state.authReducer.currentUser.workouts.length - 1
        ],
      warning: state.workoutReducer.activeClasses.warning,
    };
  }
  return {
    empty: true,
    mostRecent: {
      bodyWeight: Number(state.authReducer.currentUser.currentWeight) + 1,
    },
    warning: state.workoutReducer.activeClasses.warning,
  };
};

export default connect(mapStateToProps)(WeightField);
