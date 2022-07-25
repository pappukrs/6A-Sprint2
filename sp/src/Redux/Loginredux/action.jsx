import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionType";
import axios from "axios";
export const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginError = () => {
  return {
    type: LOGIN_ERROR,
  };
};

export const handleLogin = (body) => (dispatch) => {
  dispatch(loginLoading());
  axios({
    method: "POST",
    url: "https://reqres.in/api/login",
    data: body,
  })
    .then((res) => dispatch(loginSuccess(res.data)))
    .catch((err) => dispatch(loginError()));
};
