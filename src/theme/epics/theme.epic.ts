import { combineEpics, ofType, Epic } from 'redux-observable'
import { mapTo } from 'rxjs/operators'
import { SET_THEME, setThemeAction } from '../actions/theme.actions'

const setTheme: Epic = (action$) => action$.pipe(
  ofType(SET_THEME),
  mapTo(({ payload }
    : { payload: string }) => setThemeAction(payload)),
)

export default combineEpics(setTheme)
