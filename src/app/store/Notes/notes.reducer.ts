import { NotesActions } from "./notes.actions";
import { Note } from "src/app/models/Note";

const initialState: Note[] = [];

export const notesReducer = function(state = initialState, action) {
  switch (action.type) {
    case NotesActions.GET_NOTES_SUCCESS: {
      return { ...state, notes: action.payload };
    }

    default: {
      console.log("In notes reducer");
      return state;
    }
  }
};
