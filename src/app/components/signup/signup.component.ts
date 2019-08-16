import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Signup } from "src/app/store/signup/signup.actions";

@Component({
  selector: "signup-component",
  templateUrl: "./signup.component.html"
})
export class SignupComponent {
  userName: string;
  password: string;

  constructor(private store: Store<any>) {}

  signup() {
    this.store.dispatch(
      new Signup({ username: this.userName, password: this.password })
    );
  }
}
