import { Action } from "@ngrx/store";

export enum NotesActions {
  GET_NOTES_SUCCESS = "[Notes Api] Get Notes Success"
}

export default class GetNotesSuccess implements Action {
  public readonly type = NotesActions.GET_NOTES_SUCCESS;

  constructor(public payload: any) {}
}
