import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef
} from "@angular/core";
import { NotesService } from "src/app/services/NotesService";
import { Store, select } from "@ngrx/store";
import {
  DeleteNoteSuccess,
  EditNoteSuccess
} from "src/app/store/notes/notes.actions";
import { Note } from "src/app/models/Note";

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
  isEditing: boolean;

  @ViewChild("titleElement") titleElement: ElementRef;
  @ViewChild("descriptionElement") descriptionElement: ElementRef;

  constructor(private notesService: NotesService, private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select("appData")).subscribe(appData => {
      this.userToken = appData.user.token;
    });
  }

  delete() {
    this.notesService.deleteNote(this.id, this.userToken).subscribe(() => {
      this.store.dispatch(new DeleteNoteSuccess(this.id));
    });
  }

  save() {
    const title = this.titleElement.nativeElement.innerText;
    const description = this.descriptionElement.nativeElement.innerText;
    const note: Note = { title, description };
    this.notesService.editNote(this.id, note, this.userToken).subscribe(() => {
      this.store.dispatch(new EditNoteSuccess(this.id, note));
    });
  }

  cancel() {
    this.isEditing = false;
    this.resetNote();
  }

  private resetNote(): void {
    this.titleElement.nativeElement.innerText = this.title;
    this.descriptionElement.nativeElement.innerText = this.description;
  }
}
