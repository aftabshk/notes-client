import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Note } from './Note';

@Injectable({
  providedIn: "root"
})
export class NotesService {
  constructor(private http: HttpClient) {}

  saveNote(note) {
    return this.http.post("/notes", note);
  }

  getAllNotes() {
    return this.http.get<Note[]>("/notes");
  }
}
