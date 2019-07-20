import { User } from "../models/User";
import { LoginActions } from "./login.actions";

const initialState: User = { notes: [], name: null, token: null };

export const loginReducer = function(state = initialState, action) {
  switch (action.type) {
    case LoginActions.LOGIN_SUCCESS: {
      return { ...state, name: action.name, token: action.token };
    }
    default: {
      console.log("In login reducer");
      return state;
    }
  }
};
