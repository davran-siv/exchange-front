import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
// config
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()


const history = createBrowserHistory()

const dev = process.env.NODE_ENV === 'development'

let middleware = applyMiddleware(sagaMiddleware)

if (dev) {
  middleware = composeWithDevTools(middleware)
}

export default () => {
  const store = createStore(rootReducer(history), middleware)
  return {
    store, runSaga: sagaMiddleware.run(rootSaga)
  }
};

export { history }
