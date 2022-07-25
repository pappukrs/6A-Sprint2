import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionType";

const initState = {
  loading: false,
  Error: false,
  loginToken: {},
  blogs: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loginToken: payload,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        Error: true,
      };

    default:
      return {
        ...state,
      };
  }
};
