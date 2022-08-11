import { LOGIN } from "../types";

const AuthReducer = (prevState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...prevState,
        userToken: payload,
      };
    default:
      return prevState;
  }
};

export default AuthReducer;
