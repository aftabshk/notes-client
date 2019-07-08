import { Component, OnInit } from "@angular/core";
import { Note } from "../../models/Note";
import { NotesService } from "../../services/NotesService";

@Component({
  selector: "add-note",
  templateUrl: "./add-note.component.html"
})
export class AddNote implements OnInit {
  constructor(private notesService: NotesService) {}

  ngOnInit() {}

  saveNote(note: Note) {
    this.notesService.saveNote(note).subscribe();
  }
}
