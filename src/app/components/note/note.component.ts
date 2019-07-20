import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { NotesService } from "src/app/services/NotesService";
import { Store, select } from "@ngrx/store";
import { DeleteNoteSuccess } from 'src/app/store/notes/notes.actions';

@Component({
  selector: "note-component",
  templateUrl: "./note.component.html"
})
export class NoteComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  description: string;
  @Input()
  id: string;
  userToken: string;

  constructor(private notesService: NotesService, private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select("appData")).subscribe(appData => {
      this.userToken = appData.token;
    });
  }

  delete() {
    this.notesService.deleteNote(this.id, this.userToken).subscribe(() => {
      this.store.dispatch(new DeleteNoteSuccess(this.id));
    });
  }
}
