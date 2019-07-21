import { Component, OnInit, Input } from "@angular/core";
import { Note } from "../../models/Note";
import { NotesService } from "../../services/NotesService";
import { Store, select } from "@ngrx/store";
import { AddNoteSuccess } from "../../store/notes/notes.actions";

@Component({
  selector: "add-note",
  templateUrl: "./add-note.component.html"
})
export class AddNote implements OnInit {
  userToken: string;
  title: string;
  description: string;

  constructor(private notesService: NotesService, private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select("appData")).subscribe(appData => {
      this.userToken = appData.user.token;
    });
  }

  saveNote() {
    const note: Note = { title: this.title, description: this.description };
    this.notesService.saveNote(note, this.userToken).subscribe(() => {
      this.store.dispatch(new AddNoteSuccess(note));
    });
  }
}
