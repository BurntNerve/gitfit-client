import React from 'react';
import DateInfoTile from './date-info-tile';
import WorkoutLogTile from './workout-log-tile';
import { Link } from 'react-router-dom';

export default function DateLogTile(props) {
  //
  return (
    <div className="tile is-parent is-vertical">
      <DateInfoTile lastWorkout="Nov 18th 17" />
      <Link to="/log" className="has-text-grey-darker">
        <WorkoutLogTile />
      </Link>
    </div>
  );
}
