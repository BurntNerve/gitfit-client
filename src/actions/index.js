import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';
// import { fromByteArray } from 'base64-js';
// import { TextEncoder } from 'text-encoding';

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
      // Provide our auth token as credentials
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

// export const DELETE_WORKOUT = 'DELETE_WORKOUT';
// export const deleteWorkout = logIndex => ({
//   type: DELETE_WORKOUT,
//   logIndex,
// });

export const deleteWorkout = logIndex => (dispatch, getState) => {
  //
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

// export const SAVE_WORKOUT = 'SAVE_WORKOUT';
// export const saveWorkout = infoObject => ({
//   type: SAVE_WORKOUT,
//   infoObject,
// });

export const saveWorkout = infoObject => (dispatch, getState) => {
  //
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

// Encode a JS string as Base-64 encoded UTF-8
// const base64EncodingUTF8 = str => {
//   const encoded = new TextEncoder('utf-8').encode(str);
//   const b64Encoded = fromByteArray(encoded);
//   return b64Encoded;
// };

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token

// export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
// export const registerUserSuccess = user => ({
//   type: REGISTER_USER_SUCCESS,
//   user,
// });
//
// export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
// export const loginUserSuccess = (token, userInfo, loggedIn) => ({
//   type: LOGIN_USER_SUCCESS,
//   token,
//   userInfo,
//   loggedIn,
// });
//
// export const HANDLE_LOG_OUT = 'HANDLE_LOG_OUT';
// export const handleLogOut = () => ({
//   type: HANDLE_LOG_OUT,
// });

// export const registerUser = (
//   fullName,
//   currentWeight,
//   goalWeight,
//   username,
//   password,
// ) => dispatch => {
//   fetch('http://localhost:8080/api/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       fullName,
//       currentWeight,
//       goalWeight,
//       username,
//       password,
//     }),
//   })
//     .then(response => response.json())
//     .then(json => {
//       if (json.code) {
//         return alert(json.message);
//       }
//       dispatch(registerUserSuccess(json));
//     })
//     .catch(error => console.log(error));
// };

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
    .then(response => normalizeResponseErrors(response))
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      console.log(err);
      const { code } = err;
      if (code === 401) {
        console.log('it is a 401');
        // Could not authenticate, so return a SubmissionError for Redux
        // Form
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
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(new SubmissionError({
          [location]: message,
        }));
      }
    });

// export const login = (username, password) => dispatch => {
//   // Base64 encode the string username:password, used in the basic
//   // auth field
//   const token = base64EncodingUTF8(`${username}:${password}`);
//   return (
//     fetch(`${API_BASE_URL}/auth/login`, {
//       method: 'POST',
//       headers: {
//         // Provide our username and password as login credentials
//         Authorization: `Basic ${token}`,
//       },
//     })
//       // Reject any requests which don't return a 200 status, creating
//       // errors which follow a consistent format
//       .then(res => normalizeResponseErrors(res))
//       .then(res => res.json())
//       .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
//       .catch(err => {
//         const { code } = err;
//         if (code === 401) {
//           console.log(err);
//         }
//       })
//   );
// };

export const refreshAuthToken = () => (dispatch, getState) => {
  const authorizationToken = getState().authReducer.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      // Provide our existing token as credentials to get a new one
      Authorization: `Bearer ${authorizationToken}`,
    },
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      const { code } = err;
      if (code === 401) {
        // We couldn't get a refresh token because our current credentials
        // are invalid or expired, so clear them and sign us out
        dispatch(setCurrentUser(null));
        dispatch(setAuthToken(null));
        clearAuthToken(authorizationToken);
      }
    });
};
