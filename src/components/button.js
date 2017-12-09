import React from 'react';

export default function Button(props) {
  //
  return (
    <button
      className={`button is-rounded ${props.newClasses}`}
      onClick={props.onClick}
    >
      <span>{props.text}</span>
    </button>
  );
}
