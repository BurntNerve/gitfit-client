import {
  FETCH_PROTECTED_DATA_SUCCESS,
  FETCH_PROTECTED_DATA_ERROR,
  MODAL_ACTIVE,
} from '../actions';

const initialState = {
  data: '',
  error: null,
};

export default function protectedReducer(state = initialState, action) {
  if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: null,
    });
  } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
    });
  } else if (action.type === MODAL_ACTIVE) {
    const workouts = state.data.workouts.map((workout, index) => {
      if (index !== action.logIndex) {
        return workout;
      }
      return Object.assign({}, workout, {
        ...workout,
        modalActive: !workout.modalActive,
      });
    });
    const data = Object.assign({}, state.data, {
      ...state.data,
      workouts,
    });
    return Object.assign({}, state, {
      ...state,
      data,
    });
  }
  return state;
}
