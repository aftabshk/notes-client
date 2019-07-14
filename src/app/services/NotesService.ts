import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs/index";
import { catchError } from "rxjs/operators";
import { Note } from "../models/Note";

@Injectable({ providedIn: "root" })
export class NotesService {
  constructor(private http: HttpClient) {}

  saveNote(note: Note, token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: token
      })
    };
    return this.http.post("/notes", { note }, httpOptions);
  }

  getAllNotes(token: string): Observable<Note[] | []> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: token
      })
    };
    return this.http
      .get<Note[]>("/notes", httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteNote(id: string, token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: token
      }),
      params: { id }
    };
    return this.http.delete(`/notes`, httpOptions);
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
