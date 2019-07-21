import { LoginActions } from "./login.actions";

export const loginReducer = function(state, action) {
  switch (action.type) {
    case LoginActions.LOGIN_SUCCESS: {
      return {
        ...state,
        name: action.user.name,
        token: action.user.token,
        isUserLoggedIn: action.user.isUserLoggedIn
      };
    }

    default: {
      return state;
    }
  }
};
