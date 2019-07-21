import { loginReducer } from "./login/login.reducer";
import { notesReducer } from "./notes/notes.reducer";

const initialState = {
  notes: [],
  user: {
    userName: null,
    token: null,
    isUserLoggedIn: false
  }
};

export const reducers = function(state = initialState, action) {
  return {
    user: loginReducer(state.user, action),
    notes: notesReducer(state.notes, action)
  };
};
