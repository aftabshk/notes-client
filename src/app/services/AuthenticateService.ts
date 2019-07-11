import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthenticateService {
  constructor(private http: HttpClient) {}

  login(userName, password) {
    return this.http.post(
      "/login",
      { userName, password },
      { observe: "response" }
    );
  }
}
