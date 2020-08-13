import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGOUT,
} from "./types";

export const loginSuccess = (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
  });
};

export const loginFail = (dispatch) => {
  dispatch({
    type: LOGIN_FAIL,
  });
};

export const registerSuccess = (dispatch) => {
  dispatch({
    type: REGISTER_SUCCESS,
  });
};

export const registerFail = (dispatch) => {
  dispatch({
    type: REGISTER_FAIL,
  });
};

export const logout = (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
