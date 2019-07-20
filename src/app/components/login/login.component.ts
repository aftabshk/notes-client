import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { AuthenticateService } from "src/app/services/AuthenticateService";
import { Store } from "@ngrx/store";
import { LoginSuccess } from "src/app/store/login/login.actions";

@Component({
  selector: "login-component",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  @Output()
  whenLoggedIn: EventEmitter<Object> = new EventEmitter();

  constructor(
    private authService: AuthenticateService,
    private store: Store<any>
  ) {}

  ngOnInit() {
    // this.authService.login("affi", "affi").subscribe(response => {
    //   this.whenLoggedIn.emit({
    //     isLoggedIn: response.status === 200,
    //     token: response.body
    //   });
    // });
  }

  login() {
    this.authService.login(this.userName, this.password).subscribe(response => {
      if (response.status === 200) {
        this.store.dispatch(
          new LoginSuccess({ name: this.userName, token: response.body })
        );
      }
    });
  }
}
