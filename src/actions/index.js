// import jwtDecode from 'jwt-decode';
// import { fromByteArray } from 'base64-js';
// import { TextEncoder } from 'text-encoding';
//
// import { API_BASE_URL } from '../config';
// import { saveAuthToken, clearAuthToken } from '../local-storage';

export const normalizeResponseErrors = res => {
  if (!res.ok) {
    if (
      res.headers.has('content-type') &&
      res.headers.get('content-type').startsWith('application/json')
    ) {
      return res.json().then(err => Promise.reject(err));
    }

    return Promise.reject({
      code: res.status,
      message: res.statusText,
    });
  }
  return res;
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

export const DELETE_WORKOUT = 'DELETE_WORKOUT';
export const deleteWorkout = logIndex => ({
  type: DELETE_WORKOUT,
  logIndex,
});

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

export const SAVE_WORKOUT = 'SAVE_WORKOUT';
export const saveWorkout = infoObject => ({
  type: SAVE_WORKOUT,
  infoObject,
});

export const UPDATE_WEIGHT = 'UPDATE_WEIGHT';
export const updateWeight = newWeight => ({
  type: UPDATE_WEIGHT,
  newWeight,
});

export const TRIGGER_WARNING = 'TRIGGER_WARNING';
export const triggerWarning = warningMessage => ({
  type: TRIGGER_WARNING,
  warningMessage,
});

export const UPDATE_WORKOUT = 'UPDATE_WORKOUT';
export const updateWorkout = (infoObject, index) => ({
  type: UPDATE_WORKOUT,
  infoObject,
  index,
});

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const registerUserSuccess = user => ({
  type: REGISTER_USER_SUCCESS,
  user,
});

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const loginUserSuccess = (token, userInfo, loggedIn) => ({
  type: LOGIN_USER_SUCCESS,
  token,
  userInfo,
  loggedIn,
});

export const HANDLE_LOG_OUT = 'HANDLE_LOG_OUT';
export const handleLogOut = () => ({
  type: HANDLE_LOG_OUT,
});

export const registerUser = (
  fullName,
  currentWeight,
  goalWeight,
  username,
  password,
) => dispatch => {
  fetch('http://localhost:8080/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName,
      currentWeight,
      goalWeight,
      username,
      password,
    }),
  })
    .then(response => response.json())
    .then(json => {
      if (json.code) {
        return alert(json.message);
      }
      dispatch(registerUserSuccess(json));
    })
    .catch(error => console.log(error));
};

export const logInUser = (username, password) => dispatch => {
  console.log(username);
  console.log(password);
  fetch('http://localhost:8080/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then(response => response.json())
    .then(json => {
      const { authToken, userInfo } = json;
      localStorage.setItem('token', authToken);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      localStorage.setItem('loggedIn', true);
      dispatch(loginUserSuccess(authToken, userInfo, true));
    })
    .catch(error => console.log(error));
};
