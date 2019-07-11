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
  isLoggedIn: boolean;
  userToken: string;

  constructor(private notesService: NotesService) {}

  ngOnInit() {}

  addNoteClicked() {
    this.addingNote = true;
  }

  getUserLoginStatus(event) {
    this.isLoggedIn = event.isLoggedIn;
    this.userToken = event.token;
    this.notesService.getAllNotes(this.userToken).subscribe(notes => {
      this.notes = notes;
    });
  }
}
