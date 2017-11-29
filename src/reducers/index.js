import { combineReducers } from 'redux';
import workoutReducer from './workout';
import user from './user';

const rootReducer = combineReducers({
  // user,
  workoutReducer,
});

export default rootReducer;
