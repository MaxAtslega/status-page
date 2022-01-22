import { ActionType } from 'typesafe-actions'
import update from 'immutability-helper'

import {
  registerSuccessAction,
  REGISTER_SUCCESS,
  registerErrorAction,
  REGISTER_ERROR,
} from '../actions/register.actions'

export interface State {
  error: boolean;
}

export default function loginReducer(
  state: State = { error: false },
  action: ActionType<
    typeof registerSuccessAction | typeof registerErrorAction
    >,
): State {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return update(state, {
        error: { $set: false },
      })
    case REGISTER_ERROR:
      return update(state, {
        error: { $set: true },
      })
    default:
      return state
  }
}
