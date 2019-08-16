import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Note } from "src/app/models/Note";
import { DeleteNote, EditNote } from "src/app/store/notes/notes.actions";

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

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select("appData")).subscribe(appData => {
      this.userToken = appData.user.token;
    });
  }

  delete() {
    this.store.dispatch(new DeleteNote(this.id, this.userToken));
  }

  save() {
    const title = this.titleElement.nativeElement.innerText;
    const description = this.descriptionElement.nativeElement.innerText;
    const note: Note = { title, description };
    this.store.dispatch(new EditNote(this.id, note, this.userToken));
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
