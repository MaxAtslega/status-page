import { ActionType, createAction } from 'typesafe-actions'

export const LOGIN = 'LOGIN'
export type LOGIN = typeof LOGIN;

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;

export const LOGIN_ERROR = 'LOGIN_ERROR'
export type LOGIN_ERROR = typeof LOGIN_ERROR;

export const LOGOUT = 'LOGOUT'
export type LOGOUT = typeof LOGOUT;

export const UNAUTHORIZED_ERROR = 'UNAUTHORIZED_ERROR'
export type UNAUTHORIZED_ERROR = typeof UNAUTHORIZED_ERROR;

export const REAUTHENTICATE = 'REAUTHENTICATE'
export type REAUTHENTICATE = typeof REAUTHENTICATE;

export const loginAction = createAction(LOGIN)<{
  username: string,
  password: string,
  two_fa?: string }>()

export const loginSuccessAction = createAction(LOGIN_SUCCESS)<string>()
export const loginErrorAction = createAction(LOGIN_ERROR)<void>()
export const logoutAction = createAction(LOGOUT)<void>()
export const unauthorizedErrorAction = createAction(UNAUTHORIZED_ERROR)<
  void
  >()
export const reauthenticateAction = createAction(REAUTHENTICATE)<
  string
  >()

export type LoginActions = ActionType<
  | typeof loginAction
  | typeof loginSuccessAction
  | typeof loginErrorAction
  | typeof logoutAction
  | typeof reauthenticateAction
  | typeof unauthorizedErrorAction
  >;
