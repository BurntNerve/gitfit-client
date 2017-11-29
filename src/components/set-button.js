import React from 'react';
import { connect } from 'react-redux';
import './set-button.css';

import * as actions from '../actions';

export function SetButton(props) {
  if (props.modal) {
    return (
      <div className="control">
        <div className="select">
          <select
            value={props.value}
            onChange={e =>
              props.dispatch(actions.changeReps(e.target.value, props.index))
            }
          >
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
            <option>0</option>
          </select>
        </div>
      </div>
    );
  }
  return (
    <div className="control">
      <div className="select">
        <select
          value={props.currentExerciseSetIndex}
          onChange={e =>
            props.dispatch(actions.changeReps(e.target.value, props.index))
          }
        >
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
          <option>0</option>
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  currentExerciseSetIndex: state.currentExerciseSets[props.index],
  currentExerciseSets: state.currentExerciseSets,
});

export default connect(mapStateToProps)(SetButton);
