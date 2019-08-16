import { Action } from "@ngrx/store";
import { User } from "src/app/models/User";

export enum LoginActions {
  LOGIN_SUCCESS = "[Login] Login Success",
  LOGIN = "[Login] Login"
}

export class LoginSuccess implements Action {
  public readonly type = LoginActions.LOGIN_SUCCESS;

  constructor(public readonly user: any) {}
}

export class Login implements Action {
  public readonly type = LoginActions.LOGIN;

  constructor(public readonly user: User) {}
}
