import { createStore } from 'redux';

import { workoutReducer } from './reducers';

export default createStore(workoutReducer);
