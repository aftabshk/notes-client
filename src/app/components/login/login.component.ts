import { Component, Output, EventEmitter } from "@angular/core";
import { AuthenticateService } from "src/app/services/AuthenticateService";

@Component({
  selector: "login-component",
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  userName: string;
  password: string;
  @Output()
  whenLoggedIn: EventEmitter<Object> = new EventEmitter();

  constructor(private authService: AuthenticateService) {}

  login() {
    this.authService.login(this.userName, this.password).subscribe(response => {
      this.whenLoggedIn.emit({
        isLoggedIn: response.status === 200,
        token: response.body
      });
    });
  }
}
