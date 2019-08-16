import { Action } from "@ngrx/store";
import { User } from "src/app/models/User";

export enum SignupActions {
  SIGNUP = "[Signup] Signup",
  SIGNUP_SUCCESS = "[Signup] Signup Success"
}

export class Signup implements Action {
  public readonly type = SignupActions.SIGNUP;

  constructor(public readonly user: User) {}
}

export class SignupSuccess implements Action {
  public readonly type = SignupActions.SIGNUP_SUCCESS;
}
