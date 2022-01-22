import { ActionType } from 'typesafe-actions'
import update from 'immutability-helper'

import { ADMIN_PONG, adminPongAction } from '../actions/admin.actions'

export interface State {
  message: string;
}

export default function AdminReducer(
  state: State = { message: '' },
  action: ActionType<
    | typeof adminPongAction>,
): State {
  switch (action.type) {
    case ADMIN_PONG:
      return update(state, {
        message: { $set: action.payload },
      })
    default:
      return state
  }
}
