import { Component, OnInit } from "@angular/core";
import { NotesService } from "./services/NotesService";
import { Note } from "./models/Note";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  addingNote: boolean;
  notes: Note[] | [];

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notesService.getAllNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  addNoteClicked() {
    this.addingNote = true;
  }
}
