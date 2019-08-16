import { Component, EventEmitter, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { Login } from "src/app/store/login/login.actions";

@Component({
  selector: "login-component",
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  userName: string;
  password: string;
  @Output()
  whenLoggedIn: EventEmitter<Object> = new EventEmitter();

  constructor(private store: Store<any>) {}

  login() {
    this.store.dispatch(
      new Login({ username: this.userName, password: this.password })
    );
  }
}
