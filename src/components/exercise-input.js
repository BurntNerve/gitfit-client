import React from 'react';
import SetButton from './set-button';
import './exercise-input.css';

export default function ExerciseInput(props) {
  //
  if (props.modal === true) {
    return (
      <div className="exerciseInput field has-text-centered">
        <h1 className="title exerciseTitle is-size-3">
          {props.exercise} {props.weight}lbs:
        </h1>
        <SetButton />
        <SetButton />
        <SetButton />
        <SetButton />
        <SetButton />
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
