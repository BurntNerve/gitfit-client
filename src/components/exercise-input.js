import React from 'react';
import SetButton from './set-button';
import AllButton from './all-button';
import './exercise-input.css';

export default function ExerciseInput(props) {
  //
  return (
    <div className="exerciseInput field has-text-centered">
      {/* <h1 className="title exerciseTitle is-size-3">
        {props.exercise} {props.weight}lbs:
      </h1>
      <SetButton reps="5" />
      <SetButton reps="5" />
      <SetButton reps="5" />
      <SetButton reps="5" />
      <SetButton reps="5" />
      <AllButton /> */}
      <label className="label is-size-4">{props.exercise}</label>
      <div className="control">
        <div className="select">
          <select>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
            <option>0</option>
          </select>
        </div>
      </div>
    </div>
  );
}
