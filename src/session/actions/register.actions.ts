import { ActionType, createAction } from 'typesafe-actions'

export const REGISTER = 'LOGIN'
export type REGISTER = typeof REGISTER;

export const REGISTER_SUCCESS = 'LOGIN_SUCCESS'
export type REGISTER_SUCCESS = typeof REGISTER_SUCCESS;

export const REGISTER_ERROR = 'LOGIN_ERROR'
export type REGISTER_ERROR = typeof REGISTER_ERROR;

export const registerAction = createAction(REGISTER)<{
  key: string,
  username: string,
  password: string
}>()

export const registerSuccessAction = createAction(REGISTER_SUCCESS)<string>()
export const registerErrorAction = createAction(REGISTER_ERROR)<void>()

export type RegisterActions = ActionType<
  | typeof registerAction
  | typeof registerSuccessAction
  | typeof registerErrorAction

  >;
