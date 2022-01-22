import { combineEpics, ofType, Epic } from 'redux-observable'
import { mapTo } from 'rxjs/operators'

import { APP_PING, appPongAction } from '../actions/app.actions'

const ping: Epic = (action$) => action$.pipe(
  ofType(APP_PING),
  mapTo(({ payload }: { payload: {message: string} }) => appPongAction(payload.message)),
)

export default combineEpics(ping)
