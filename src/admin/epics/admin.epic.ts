import { combineEpics, ofType, Epic } from 'redux-observable'
import { mapTo } from 'rxjs/operators'

import { ADMIN_PING, adminPongAction } from '../actions/admin.actions'

const ping: Epic = (action$) => action$.pipe(
  ofType(ADMIN_PING),
  mapTo(({ payload }: { payload: {message: string} }) => adminPongAction(payload.message)),
)

export default combineEpics(ping)
