import { combineEpics, ofType, Epic } from 'redux-observable'
import { mapTo } from 'rxjs/operators'
import { SET_THEME, setThemeAction } from '../actions/theme.actions'
import { USER_PONG } from '../../user/actions/user.actions'

const user: Epic = (action$) => action$.pipe(
  ofType(USER_PONG),
  mapTo(({ payload }
    : { payload: { theme: string, name: string } }) => setThemeAction(payload.theme)),
)

const setTheme: Epic = (action$) => action$.pipe(
  ofType(SET_THEME),
  mapTo(({ payload }
    : { payload: string }) => setThemeAction(payload)),
)

export default combineEpics(user, setTheme)
