import React from 'react';

export default function Field(props) {
  //
  return (
    <div className="field-input">
      <label className="label is-medium">{props.label}</label>
      <div className="control field-control">
        <input
          className="input is-medium"
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}
