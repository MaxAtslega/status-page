import { combineEpics, ofType, Epic } from 'redux-observable'
import { mapTo } from 'rxjs/operators'
import { push } from 'redux-first-history'

import {
  LOGIN,
  loginSuccessAction,
  LOGIN_SUCCESS,
  UNAUTHORIZED_ERROR,
  LOGOUT,
} from '../actions/login.actions'

const login: Epic = (action$) => action$.pipe(
  ofType(LOGIN),
  mapTo(loginSuccessAction('DasIstEinTestToken')),
)

const start: Epic = (action$) => action$.pipe(
  ofType(LOGIN_SUCCESS),
  mapTo(push('/app/dashboard')),
)

const redirectToStart: Epic = (action$) => action$.pipe(
  ofType(LOGOUT, UNAUTHORIZED_ERROR),
  mapTo(push('/session/signin')),
)

export default combineEpics(login, start, redirectToStart)
