import {
  CHECK_AUTH_STATE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "../actions/auth";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  isCheckingAuthState: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_AUTH_STATE:
      return {
        ...state,
        isCheckingAuthState: true,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false,
        isCheckingAuthState: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        isCheckingAuthState: false,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isLoading: false,
        isCheckingAuthState: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        isCheckingAuthState: false,
      };
    default:
      return state;
  }
};

export default authReducer;
