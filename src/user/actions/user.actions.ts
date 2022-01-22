import { ActionType, createAction } from 'typesafe-actions'

export const USER_PING = 'USER_PING'
export type USER_PING = typeof USER_PING;

export const USER_PONG = 'USER_PONG'
export type USER_PONG = typeof USER_PONG;

export const userPingAction = createAction(USER_PING)<{ theme: string, name: string }>()
export const userPongAction = createAction(USER_PONG)<string>()

export type UserActions = ActionType<
  | typeof userPingAction
  | typeof userPongAction
  >;
