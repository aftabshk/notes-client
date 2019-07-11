import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs/index";
import { catchError } from "rxjs/operators";
import { Note } from "../models/Note";

@Injectable({ providedIn: "root" })
export class NotesService {
  constructor(private http: HttpClient) {}

  saveNote(note: Note, token: string) {
    return this.http.post("/notes", { note, token });
  }

  getAllNotes(userToken: string): Observable<Note[] | []> {
    return this.http
      .get<Note[]>("/notes", { params: { token: userToken } })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    throwError("Something went wrong. Unable to fetch notes from the server");
    return [];
  }
}
