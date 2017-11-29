import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

export class WeightField extends React.Component {
  //

  render() {
    const verifyWeight = weightInput => {
      if (weightInput === '') {
        this.props.dispatch(actions.triggerWarning('Enter a number.'));
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
          <a className="button is-dark">Update</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mostRecent: state.workouts[state.workouts.length - 1],
  warning: state.activeClasses.warning,
});

export default connect(mapStateToProps)(WeightField);
