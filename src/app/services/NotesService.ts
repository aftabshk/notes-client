import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse
} from "@angular/common/http";
import { Note } from "../models/Note";
import { catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs/index";

@Injectable({ providedIn: "root" })
export class NotesService {
  constructor(private http: HttpClient) {}

  saveNote(note: Note) {
    console.log(note);
    return this.http.post("/notes", note);
  }

  getAllNotes(): Observable<Note[] | []> {
    return this.http.get<Note[]>("/notes").pipe(catchError(this.handleError));
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
