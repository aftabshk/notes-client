import { NotesActions } from "./notes.actions";

export interface User {
  notes: [];
}

const initialState: User = { notes: [] };

export const notesReducer = function(state = initialState, action) {
  switch (action.type) {
    case NotesActions.GET_NOTES_SUCCESS: {
      return { ...state, notes: action.payload };
    }

    default: {
      return state;
    }
  }
};
