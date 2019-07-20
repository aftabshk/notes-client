import { User } from "../models/User";
import { LoginActions } from "./login.actions";
import { NotesActions } from "../notes/notes.actions";

const initialState: User = {
  notes: [],
  name: null,
  token: null,
  isUserLoggedIn: false
};

export const loginReducer = function(state = initialState, action) {
  switch (action.type) {
    case LoginActions.LOGIN_SUCCESS: {
      return {
        ...state,
        name: action.user.name,
        token: action.user.token,
        isUserLoggedIn: action.user.isUserLoggedIn
      };
    }

    case NotesActions.GET_NOTES_SUCCESS: {
      return { ...state, notes: action.notes };
    }

    case NotesActions.ADD_NOTE_SUCCESS: {
      const { notes } = state;
      notes.push(action.note);
      return { ...state, notes };
    }

    case NotesActions.DELETE_NOTE_SUCCESS: {
      const { notes } = state;
      const index = notes.findIndex(note => {
        return note["id"] === action.id;
      });
      const newNotes = notes.slice(0, index).concat(notes.slice(index + 1));
      console.log(newNotes, "***********");
      return { ...state, notes: newNotes };
    }

    default: {
      return state;
    }
  }
};
