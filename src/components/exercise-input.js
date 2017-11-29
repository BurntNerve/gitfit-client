import React from 'react';
import SetButton from './set-button';
import './exercise-input.css';

export default function ExerciseInput(props) {
  if (props.exercise === 'Deadlift' && props.modal) {
    return (
      <div className="exerciseInput field has-text-centered">
        <h1 className="title exerciseTitle is-size-3">
          {props.exercise} {props.weight}lbs:
        </h1>
        <SetButton modal value={props.values[0]} />
      </div>
    );
  }

  if (props.modal === true) {
    return (
      <div className="exerciseInput field has-text-centered">
        <h1 className="title exerciseTitle is-size-3">
          {props.exercise} {props.weight}lbs:
        </h1>
        <SetButton modal value={props.values[0]} setNumber={props.setNumber} />
        <SetButton modal value={props.values[1]} setNumber={props.setNumber} />
        <SetButton modal value={props.values[2]} setNumber={props.setNumber} />
        <SetButton modal value={props.values[3]} setNumber={props.setNumber} />
        <SetButton modal value={props.values[4]} setNumber={props.setNumber} />
      </div>
    );
  }

  if (props.exercise === 'Deadlift') {
    //
    return (
      <div className="exerciseInput field has-text-centered">
        <h1 className="title exerciseTitle is-size-3">
          {props.exercise} {props.weight}lbs:
        </h1>
        <SetButton index={0} />
      </div>
    );
  }

  return (
    <div className="exerciseInput field has-text-centered">
      <h1 className="title exerciseTitle is-size-3">
        {props.exercise} {props.weight}lbs:
      </h1>
      <SetButton index={0} />
      <SetButton index={1} />
      <SetButton index={2} />
      <SetButton index={3} />
      <SetButton index={4} />
    </div>
  );
}
