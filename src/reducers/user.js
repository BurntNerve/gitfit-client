const initialState = {
  loggedIn: false,
};

const user = (state = initialState, action) => {
  if (action.type === 'REGISTER_USER_SUCCESS') {
    window.location = '/registration/login';
    return {
      ...state,
      data: action.user,
    };
  } else if (action.type === 'LOGIN_USER_SUCCESS') {
    return {
      ...state,
      data: action.userInfo,
      loggedIn: action.loggedIn,
      token: action.token,
    };
  } else if (action.type === 'HANDLE_LOG_OUT') {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('loggedIn');
    window.location = '/';
    return {
      ...state,
      token: null,
    };
  }
  return state;
};

export default user;
