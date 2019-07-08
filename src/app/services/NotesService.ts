import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Note } from "../models/Note";

@Injectable({ providedIn: "root" })
export class NotesService {
  constructor(private http: HttpClient) {}

  saveNote(note: Note) {
    console.log(note);
    return this.http.post("/notes", note);
  }

  getAllNotes() {
    return this.http.get<Note[]>("/notes");
  }
}
