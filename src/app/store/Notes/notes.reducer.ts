import { NotesActions } from "./notes.actions";

const initialState = [];

export const notesReducer = function(notes = initialState, action) {
  switch (action.type) {
    case NotesActions.GET_NOTES_SUCCESS: {
      return [...notes, ...action.notes];
    }

    case NotesActions.ADD_NOTE_SUCCESS: {
      return [...notes, action.note];
    }

    case NotesActions.DELETE_NOTE_SUCCESS: {
      const index = notes.findIndex(note => {
        return note["id"] === action.id;
      });
      const newNotes = notes.slice(0, index).concat(notes.slice(index + 1));
      return [...newNotes];
    }

    default: {
      return notes;
    }
  }
};
