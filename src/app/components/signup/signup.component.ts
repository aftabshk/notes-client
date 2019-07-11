import { Component } from "@angular/core";
import { AuthenticateService } from "src/app/services/AuthenticateService";

@Component({
  selector: "signup-component",
  templateUrl: "./signup.component.html"
})
export class SignupComponent {
  userName: string;
  password: string;

  constructor(private authService: AuthenticateService) {}

  signup() {
    this.authService.signup(this.userName, this.password).subscribe();
  }
}
