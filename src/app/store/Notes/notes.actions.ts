import { Action } from "@ngrx/store";
import { Note } from "src/app/models/Note";

export enum NotesActions {
  GET_NOTES_SUCCESS = "[Notes Api] Get Notes Success",
  GET_NOTES = "[Notes Api] Get Notes",
  ADD_NOTE_SUCCESS = "[Notes Api] Add Note Success",
  DELETE_NOTE = "[Notes Api] Delete Note",
  EDIT_NOTE = "[Notes Api] Edit Note",
  DELETE_NOTE_SUCCESS = "[Notes Api] Delete Note Success",
  EDIT_NOTE_SUCCESS = "[Notes Api] Edit Note Success"
}

export class GetNotesSuccess implements Action {
  public readonly type = NotesActions.GET_NOTES_SUCCESS;

  constructor(public readonly notes: any) {}
}

export class AddNoteSuccess implements Action {
  public readonly type = NotesActions.ADD_NOTE_SUCCESS;

  constructor(public readonly note: any) {}
}

export class DeleteNoteSuccess implements Action {
  public readonly type = NotesActions.DELETE_NOTE_SUCCESS;

  constructor(public readonly id: any) {}
}

export class EditNoteSuccess implements Action {
  public readonly type = NotesActions.EDIT_NOTE_SUCCESS;

  constructor(public readonly id: any, public readonly note: Note) {}
}

export class GetNotes implements Action {
  public readonly type = NotesActions.GET_NOTES;

  constructor(public readonly token: string) {}
}

export class DeleteNote implements Action {
  public readonly type = NotesActions.DELETE_NOTE;

  constructor(public readonly id: string, public readonly token: string) {}
}

export class EditNote implements Action {
  public readonly type = NotesActions.EDIT_NOTE;

  constructor(
    public readonly id: string,
    public readonly note: Note,
    public readonly token: string
  ) {}
}
