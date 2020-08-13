import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGOUT,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { ...state, isAuthenticated: true };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
}
