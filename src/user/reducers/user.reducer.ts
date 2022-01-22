import { ActionType } from 'typesafe-actions'
import update from 'immutability-helper'

import { USER_PONG, userPongAction } from '../actions/user.actions'

export interface State {
  message: string;
}

export default function AdminReducer(
  state: State = { message: '' },
  action: ActionType<
    typeof userPongAction
    >,
): State {
  switch (action.type) {
    case USER_PONG:
      return update(state, {
        message: { $set: action.payload },
      })
    default:
      return state
  }
}
