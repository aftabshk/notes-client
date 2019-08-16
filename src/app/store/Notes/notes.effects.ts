import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { NotesService } from "src/app/services/NotesService";
import { DeleteNote, DeleteNoteSuccess, EditNote, EditNoteSuccess, GetNotes, GetNotesSuccess, NotesActions } from "./notes.actions";

@Injectable()
export class NotesEffects {
  constructor(private actions$: Actions, private notesService: NotesService) {}

  @Effect()
  loadNotes$ = this.actions$.pipe(
    ofType(NotesActions.GET_NOTES),
    mergeMap((action: GetNotes) =>
      this.notesService.getAllNotes(action.token).pipe(
        map(notes => {
          return new GetNotesSuccess(notes);
        })
      )
    )
  );

  @Effect()
  deleteNote$ = this.actions$.pipe(
    ofType(NotesActions.DELETE_NOTE),
    mergeMap((action: DeleteNote) =>
      this.notesService.deleteNote(action.id, action.token).pipe(
        map(() => {
          return new DeleteNoteSuccess(action.id);
        })
      )
    )
  );

  @Effect()
  editNote$ = this.actions$.pipe(
    ofType(NotesActions.EDIT_NOTE),
    mergeMap((action: EditNote) =>
      this.notesService.editNote(action.id, action.note, action.token).pipe(
        map(() => {
          return new EditNoteSuccess(action.id, action.note);
        })
      )
    )
  );
}
