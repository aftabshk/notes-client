import { Component, Input, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Note } from "src/app/models/Note";
import { NotesService } from "src/app/services/NotesService";
import { GetNotes } from 'src/app/store/notes/notes.actions';

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
    this.store.dispatch(new GetNotes(this.token));
    this.store.pipe(select("appData")).subscribe(appData => {
      this.notes = appData.notes;
    });
  }

  addNoteClicked() {
    this.addingNote = true;
  }
}
