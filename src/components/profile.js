import React from 'react';
import { connect } from 'react-redux';
import DateLogTile from './date-log-tile';
import WorkoutDataTile from './workout-data-tile';
import ProgressChartTile from './progress-chart-tile';
import WorkoutStatsTile from './workout-stats-tile';
import './profile.css';

export function Profile(props) {
  return (
    <section className="section profile-section">
      <div className="container profile-container">
        <h1 className="title has-text-white-bis is-size-4-mobile is-size-1-tablet has-text-centered">
          Welcome, {props.currentUser}
        </h1>

        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <DateLogTile />
              <ProgressChartTile
                change="down"
                weightPercent="5"
                progress="46"
              />
            </div>
            <WorkoutDataTile />
          </div>
          <WorkoutStatsTile
            totalWeight="1450"
            strongestLift="Squat"
            strongestLiftWeight="180"
            totalWorkouts="13"
          />
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({ currentUser: state.user.loggedIn });

export default connect(mapStateToProps)(Profile);
