import React from 'react';
import { Link } from 'react-router-dom';
import DateInfoTile from './date-info-tile';
import WorkoutLogTile from './workout-log-tile';

export default function DateLogTile(props) {
  //
  return (
    <div className="tile is-parent is-vertical">
      <DateInfoTile />
      <Link to="/log" className="has-text-grey-darker">
        <WorkoutLogTile />
      </Link>
    </div>
  );
}
