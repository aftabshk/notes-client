import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

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

  signup(userName, password) {
    return this.http.post(
      "/signup",
      { userName, password },
      { observe: "response" }
    );
  }
}
