import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { NotesService } from "src/app/services/NotesService";

@Component({
  selector: "note-component",
  templateUrl: "./note.component.html"
})
export class NoteComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  description: string;
  ngOnInit() {}
  @Input()
  id: string;
  @Input()
  token: string;

  constructor(private notesService: NotesService) {}

  delete() {
    this.notesService.deleteNote(this.id, this.token).subscribe();
  }
}
