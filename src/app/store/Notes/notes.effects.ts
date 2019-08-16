import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { NotesService } from "src/app/services/NotesService";
import { GetNotes, GetNotesSuccess, NotesActions } from "./notes.actions";

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
}
