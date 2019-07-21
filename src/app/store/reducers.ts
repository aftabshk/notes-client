import { loginReducer } from "./login/login.reducer";
import { notesReducer } from "./notes/notes.reducer";
import { combineReducers } from "@ngrx/store";

export const reducers = combineReducers({
  user: loginReducer,
  notes: notesReducer
});
