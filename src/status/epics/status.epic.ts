import { combineEpics, ofType, Epic } from 'redux-observable'
import { mapTo } from 'rxjs/operators'
import { USER_PING, userPongAction } from '../actions/status.actions'

const ping: Epic = (action$) => action$.pipe(
  ofType(USER_PING),
  mapTo(({ payload }: { payload: {message: string} }) => userPongAction(payload.message)),
)

export default combineEpics(ping)
