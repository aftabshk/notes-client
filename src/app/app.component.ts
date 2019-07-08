import { Component } from "@angular/core";
import { NotesService } from "./services/NotesService";

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
  }
}
