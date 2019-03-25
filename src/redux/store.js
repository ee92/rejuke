import { applyMiddleware, createStore, compose } from 'redux'
import { rootReducer } from './reducers'
import upload from './middleware/upload'
import library from './middleware/library'
import api from './middleware/api'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...upload, ...library, ...api)
  )
)
