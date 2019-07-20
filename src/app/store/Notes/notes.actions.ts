import { Action } from "@ngrx/store";

export enum NotesActions {
  GET_NOTES_SUCCESS = "[Notes Api] Get Notes Success",
  ADD_NOTE_SUCCESS = "[Notes Api] Add Note Success",
  DELETE_NOTE_SUCCESS = "[Notes Api] Delete Note Success"
}

export class GetNotesSuccess implements Action {
  public readonly type = NotesActions.GET_NOTES_SUCCESS;

  constructor(public notes: any) {}
}

export class AddNoteSuccess implements Action {
  public readonly type = NotesActions.ADD_NOTE_SUCCESS;

  constructor(public note: any) {}
}

export class DeleteNoteSuccess implements Action {
  public readonly type = NotesActions.DELETE_NOTE_SUCCESS;

  constructor(public id: any) {}
}
