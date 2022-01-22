import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import { createReduxHistoryContext } from 'redux-first-history'
import { createBrowserHistory } from 'history'
import rootReducer, { AppState } from '../reducers/rootReducer'
import rootEpic from '../epics/rootEpic'
import { AllActions } from '../actions/actions'

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
})

const epicMiddleware = createEpicMiddleware<
  AllActions,
  AllActions,
  AppState
  >()

export const store = createStore(
  rootReducer(routerReducer),
  composeWithDevTools(
    applyMiddleware(routerMiddleware, epicMiddleware),
  ),
)

epicMiddleware.run(rootEpic)

export const history = createReduxHistory(store)
