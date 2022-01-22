import { ActionType, createAction } from 'typesafe-actions'

export const ADMIN_PING = 'ADMIN_PING'
export type ADMIN_PING = typeof ADMIN_PING;

export const ADMIN_PONG = 'ADMIN_PONG'
export type ADMIN_PONG = typeof ADMIN_PONG;

export const adminPingAction = createAction(ADMIN_PING)<{ message: string }>()
export const adminPongAction = createAction(ADMIN_PONG)<string>()

export type AdminActions = ActionType<
  | typeof adminPingAction
  | typeof adminPongAction
  >;
