import { combineReducers } from 'redux'

import statusReducer from '../status/reducers/status.reducer'
import incidentReducer from '../incident/reducers/incident.reducer'
import themeReducer from '../theme/reducers/theme.reducer'

export default function createRootReducer(routerReducer: any) {
  return combineReducers({
    router: routerReducer,
    incident: incidentReducer,
    status: statusReducer,
    theme: themeReducer,
  })
}

export type AppState = ReturnType<ReturnType<typeof createRootReducer>>;
