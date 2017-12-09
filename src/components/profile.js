import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DateLogTile from './date-log-tile';
import WorkoutDataTile from './workout-data-tile';
import ProgressChartTile from './progress-chart-tile';
import WorkoutStatsTile from './workout-stats-tile';
import './profile.css';

import * as actions from '../actions';

export class Profile extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(actions.fetchProtectedData());
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <section className="section profile-section">
        <div className="container profile-container">
          <h1 className="title has-text-white-bis is-size-4-mobile is-size-1-tablet has-text-centered">
            Welcome, {this.props.username}
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
}

const mapStateToProps = state => {
  const { currentUser } = state.authReducer;
  return {
    loggedIn: currentUser !== null,
    username: currentUser ? state.authReducer.currentUser.username : '',
    name: currentUser ? state.authReducer.currentUser.fullName : '',
    protectedData: state.protectedReducer.data,
  };
};

export default connect(mapStateToProps)(Profile);
