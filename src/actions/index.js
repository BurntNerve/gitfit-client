import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { saveAuthToken, clearAuthToken } from '../local-storage';

export const normalizeResponseErrors = res => {
  if (!res.ok) {
    if (
      res.headers.has('content-type') &&
      res.headers.get('content-type').startsWith('application/json')
    ) {
      return res.json().then(err => Promise.reject(err));
    }
    console.log(res.status);
    console.log(res.statusText);
    return Promise.reject(new Error({
      code: res.status,
      message: res.statusText,
    }));
  }
  return res;
};

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken,
});

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser,
});

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(setCurrentUser(decodedToken.user));
  saveAuthToken(authToken);
};

export const BURGER_ACTIVE = 'BURGER_ACTIVE';
export const burgerActive = () => ({
  type: BURGER_ACTIVE,
});

export const NAV_ACTIVE = 'NAV_ACTIVE';
export const navActive = () => ({
  type: NAV_ACTIVE,
});

export const MODAL_ACTIVE = 'MODAL_ACTIVE';
export const modalActive = logIndex => ({
  type: MODAL_ACTIVE,
  logIndex,
});

export const RESET_COUNTER = 'RESET_COUNTER';
export const resetCounter = () => ({
  type: RESET_COUNTER,
});

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
  type: FETCH_PROTECTED_DATA_SUCCESS,
  data,
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
  type: FETCH_PROTECTED_DATA_ERROR,
  error,
});

export const fetchProtectedData = () => (dispatch, getState) => {
  const authToken = getState().authReducer.authToken;
  return fetch(`${API_BASE_URL}/protected`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ data }) => dispatch(fetchProtectedDataSuccess(data)))
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};

export const deleteWorkout = logIndex => (dispatch, getState) => {
  fetch(`${API_BASE_URL}/auth/deleteWorkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      logIndex,
      username: getState().authReducer.currentUser.username,
    }),
  })
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .then(() => dispatch(fetchProtectedData()))
    .then(() => dispatch(resetCounter()))
    .catch(err => console.log(err));
};

export const CHANGE_REPS = 'CHANGE_REPS';
export const changeReps = (amount, index) => ({
  type: CHANGE_REPS,
  amount,
  index,
});

export const NEXT_EXERCISE = 'NEXT_EXERCISE';
export const nextExercise = infoObject => ({
  type: NEXT_EXERCISE,
  infoObject,
});

export const saveWorkout = infoObject => (dispatch, getState) => {
  const newWorkout = Object.assign(
    {},
    getState().workoutReducer.newWorkout,
    infoObject,
  );
  fetch(`${API_BASE_URL}/auth/addWorkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      newWorkout,
    }),
  })
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .then(() => dispatch(fetchProtectedData()))
    .then(() => dispatch(resetCounter()))
    .catch(err => console.log(err));
};

export const updateWeight = newWeight => (dispatch, getState) => {
  console.log(newWeight);
  fetch(`${API_BASE_URL}/auth/updateWeight`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      bodyWeight: newWeight,
      username: getState().authReducer.currentUser.username,
    }),
  })
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .then(() => dispatch(fetchProtectedData()))
    .then(() => {
      dispatch(resetCounter());
    })
    .catch(err => console.log(err));
};

export const TRIGGER_WARNING = 'TRIGGER_WARNING';
export const triggerWarning = warningMessage => ({
  type: TRIGGER_WARNING,
  warningMessage,
});

export const TRIGGER_SUBMITTING = 'TRIGGER_SUBMITTING';
export const triggerSubmitting = () => ({
  type: TRIGGER_SUBMITTING,
});

export const updateWorkout = (infoObject, logIndex) => (dispatch, getState) => {
  const update = Object.assign(
    {},
    getState().workoutReducer.newWorkout,
    infoObject,
  );
  fetch(`${API_BASE_URL}/auth/updateWorkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      update,
      logIndex,
      username: getState().authReducer.currentUser.username,
    }),
  })
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .then(() => dispatch(fetchProtectedData()))
    .then(() => {
      dispatch(resetCounter());
      dispatch(modalActive());
    })
    .catch(err => console.log(err));
};

export const logInUser = (username, password) => dispatch => {
  console.log(username);
  console.log(password);
  fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .then(() => dispatch(triggerSubmitting()))
    .catch(err => {
      console.log(err);
      dispatch(triggerWarning('Incorrect username or password.'));
      dispatch(triggerSubmitting());
      const { code } = err;
      if (code === 401) {
        return Promise.reject(new SubmissionError({
          _error: 'Incorrect username or password',
        }));
      }
    });
};

export const registerUser = user => dispatch =>
  fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const { reason, message, location } = err;
      if (reason === 'ValidationError') {
        return Promise.reject(new SubmissionError({
          [location]: message,
        }));
      }
    });

export const refreshAuthToken = () => (dispatch, getState) => {
  const authorizationToken = getState().authReducer.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authorizationToken}`,
    },
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      const { code } = err;
      if (code === 401) {
        dispatch(setCurrentUser(null));
        dispatch(setAuthToken(null));
        clearAuthToken(authorizationToken);
      }
    });
};
