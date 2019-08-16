import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { AuthenticateService } from "src/app/services/AuthenticateService";
import { LoginActions, Login, LoginSuccess } from "./login.actions";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthenticateService
  ) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType(LoginActions.LOGIN),
    mergeMap((action: Login) =>
      this.authService.login(action.user.username, action.user.password).pipe(
        map(response => {
          if (response.status === 200)
            return new LoginSuccess({
              name: action.user.username,
              token: response.body,
              isUserLoggedIn: true
            });
        })
      )
    )
  );
}
