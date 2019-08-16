import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { AuthenticateService } from "src/app/services/AuthenticateService";
import { SignupActions, Signup, SignupSuccess } from "./signup.actions";
import { mergeMap, map } from "rxjs/operators";
import { EMPTY } from "rxjs";

@Injectable()
export class SignupEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticateService
  ) {}

  @Effect()
  signup$ = this.actions$.pipe(
    ofType(SignupActions.SIGNUP),
    mergeMap((action: Signup) =>
      this.authService
        .signup(action.user.username, action.user.password)
        .pipe(map(() => new SignupSuccess()))
    )
  );
}
