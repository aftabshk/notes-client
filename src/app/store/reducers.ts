import {
  ActionReducerMap,
  combineReducers,
  createFeatureSelector
} from "@ngrx/store";
import { loginReducer } from "./login/login.reducer";
import { notesReducer } from "./notes/notes.reducer";

export const reducers: ActionReducerMap<any> = {
  user: loginReducer,
  notes: notesReducer
};
