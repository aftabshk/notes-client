import { Component, Input, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Note } from "src/app/models/Note";
import { NotesService } from "src/app/services/NotesService";
import { GetNotesSuccess } from "src/app/store/notes/notes.actions";

@Component({
  selector: "notes",
  templateUrl: "./notes.component.html"
})
export class Notes implements OnInit {
  notes: Note[];
  @Input()
  token: string;
  addingNote: boolean;
  constructor(private notesService: NotesService, private store: Store<any>) {}

  ngOnInit() {
    this.notesService.getAllNotes(this.token).subscribe(notes => {
      this.store.dispatch(new GetNotesSuccess(notes));
      this.store.pipe(select("appData")).subscribe(appData => {
        this.notes = appData.notes;
      });
    });
  }

  addNoteClicked() {
    this.addingNote = true;
  }
}
