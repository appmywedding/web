import { auth } from "../firebase";
import axios from "axios";
import { baseURL } from "../environment";

export const CHECK_AUTH_STATE = "CHECK_AUTH_STATE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

const checkAuthState = () => ({
  type: CHECK_AUTH_STATE,
});

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  user,
});

const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  error,
});

const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  error,
});

const onLoginSucceeded = async (user, dispatch) => {
  try {
    const userFromServer = await axios.get("/api/user", {
      headers: {
        uid: user.uid,
      },
    });
    if (userFromServer) {
      const { data } = userFromServer;
      dispatch(loginSuccess({ ...user, ...data.user }));
    }
  } catch (error) {
    dispatch(loginFailure(error.message ?? "Error logging in"));
  }
};

export const checkAuth = () => async (dispatch) => {
  dispatch(checkAuthState());
  try {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await onLoginSucceeded(
          {
            uid: user.uid,
            email: user.email,
            refreshToken: user.refreshToken,
          },
          dispatch
        );
      } else {
        dispatch(logoutSuccess());
      }
    });
  } catch (error) {
    console.log("Error checking auth state", error);
    dispatch(logoutFailure(error.message ?? "Error checking auth state"));
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    await auth.signInWithEmailAndPassword(email, password);
    const user = auth.currentUser;
    await onLoginSucceeded(
      {
        uid: user.uid,
        email: user.email,
        refreshToken: user.refreshToken,
      },
      dispatch
    );
  } catch (error) {
    console.log("Error logging in", error);
    dispatch(loginFailure(error.message ?? "Error logging in"));
    return;
  }
};

export const register = (email, password) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    auth.createUserWithEmailAndPassword(email, password);
    const user = auth.currentUser;
    dispatch(
      registerSuccess({
        uid: user.uid,
        email: user.email,
        refreshToken: user.refreshToken,
      })
    );
  } catch (error) {
    console.log("Error registering", error);
    dispatch(registerFailure(error.message ?? "Error registering"));
    return;
  }
};

export const logout = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await auth.signOut();
    dispatch(logoutSuccess());
  } catch (error) {
    console.log("Error logging out", error);
    dispatch(logoutFailure(error.message ?? "Error logging out"));
  }
};
