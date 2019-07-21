import { LoginActions } from "./login.actions";

const initialState = { userName: null, token: null, isUserLoggedIn: false };

export const loginReducer = function(state = initialState, action) {
  switch (action.type) {
    case LoginActions.LOGIN_SUCCESS: {
      return {
        ...state,
        userName: action.user.name,
        token: action.user.token,
        isUserLoggedIn: action.user.isUserLoggedIn
      };
    }

    default: {
      return state;
    }
  }
};
