import React from 'react';
import './set-button.css';

export default function SetButton(props) {
  //
  return (
    <button className="button is-medium set-button">
      <strong>{props.reps}</strong>
    </button>
  );
}
