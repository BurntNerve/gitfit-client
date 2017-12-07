import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import workoutReducer from './workout';
import user from './user';
import authReducer from './auth';
import protectedReducer from './protected-data';

const rootReducer = combineReducers({
  form: formReducer,
  user,
  workoutReducer,
  authReducer,
  protectedReducer,
});

export default rootReducer;
