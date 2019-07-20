import { Action } from "@ngrx/store";

export enum LoginActions {
  LOGIN_SUCCESS = "[Login] Login Success"
}

export class LoginSuccess implements Action {
  public readonly type = LoginActions.LOGIN_SUCCESS;

  constructor(public user: any) {}
}
