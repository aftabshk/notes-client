import { Component, OnInit, Input } from "@angular/core";
import { Note } from "../../models/Note";
import { NotesService } from "../../services/NotesService";

@Component({
  selector: "add-note",
  templateUrl: "./add-note.component.html"
})
export class AddNote implements OnInit {
  @Input()
  userToken: string;

  constructor(private notesService: NotesService) {}

  ngOnInit() {}

  saveNote(note: Note) {
    this.notesService.saveNote(note, this.userToken).subscribe();
  }
}
