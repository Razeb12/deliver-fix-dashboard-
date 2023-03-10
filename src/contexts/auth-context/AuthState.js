import { useReducer } from "react";
import AuthReducer from "./AuthReducer";
import AuthContext from "./AuthContext";
import { LOGIN } from "../types";
import axios from "axios";
import { BASE_URL } from "../../utils/baseUrl";

const AuthState = ({ children }) => {
  const initialState = {
    userToken: localStorage.getItem("userToken") || null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/v1/auth/signin?q=company`,
        {
          email,
          password,
        }
      );
      dispatch({ type: LOGIN, payload: data.data });
      localStorage.setItem("userToken", data.data);

      return true;
    } catch (error) {
      if (error.response.data.status === false) {
        return false;
      }
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userToken: state.userToken,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
