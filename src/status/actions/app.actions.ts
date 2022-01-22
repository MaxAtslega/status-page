import { ActionType, createAction } from 'typesafe-actions'

export const APP_PING = 'APP_PING'
export type APP_PING = typeof APP_PING;

export const APP_PONG = 'APP_PONG'
export type APP_PONG = typeof APP_PONG;

export const appPingAction = createAction(APP_PING)<{ message: string }>()
export const appPongAction = createAction(APP_PONG)<string>()

export type AppActions = ActionType<
  | typeof appPingAction
  | typeof appPongAction
  >;
