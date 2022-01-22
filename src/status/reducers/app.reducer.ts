import { ActionType } from 'typesafe-actions'
import update from 'immutability-helper'

import { APP_PONG, appPongAction } from '../actions/app.actions'

export interface State {
  message: string;
}

export default function AdminReducer(
  state: State = { message: '' },
  action: ActionType<
    typeof appPongAction
    >,
): State {
  switch (action.type) {
    case APP_PONG:
      return update(state, {
        message: { $set: action.payload },
      })
    default:
      return state
  }
}
