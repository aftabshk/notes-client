import { Component } from "@angular/core";
import { NotesService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  addingNote: boolean;

  constructor(private notesService: NotesService) {}

  addNoteClicked() {
    this.addingNote = true;
    this.getAllNotes();
  }

  saveNote(title, description) {
    const note = { title, description };
    this.notesService.saveNote(note).subscribe();
    this.addingNote = false;
  }

  getAllNotes() {
    this.notesService.getAllNotes().subscribe(data => {
      console.log(data);
    });
  }
}
