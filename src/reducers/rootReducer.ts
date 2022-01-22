import { combineReducers } from 'redux'

import adminReducer from '../admin/reducers/admin.reducer'
import appReducer from '../status/reducers/app.reducer'
import loginReducer from '../session/reducers/login.reducer'
import registerReducer from '../session/reducers/register.reducer'
import userReducer from '../user/reducers/user.reducer'
import themeReducer from '../theme/reducers/theme.reducer'

export default function createRootReducer(routerReducer: any) {
  return combineReducers({
    router: routerReducer,
    admin: adminReducer,
    theme: themeReducer,
    app: appReducer,
    login: loginReducer,
    register: registerReducer,
    user: userReducer,
  })
}

export type AppState = ReturnType<ReturnType<typeof createRootReducer>>;
