import React from 'react';
import './terminal.css';

export default function Terminal(props) {
  return (
    <div className="terminal has-text-left">
      <div className="topArea">
        <button className="exit size-button">x</button>
        <button className="mini size-button">-</button>
        <button className="big size-button">+</button>
      </div>
      <p>Your-life: ~</p>
    </div>
  );
}
