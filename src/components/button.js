import React from 'react';

export default function Button(props) {
  //
  return (
    <button className={`button ${props.newClasses}`} onClick={props.onClick}>
      <span>{props.text}</span>
    </button>
  );
}
