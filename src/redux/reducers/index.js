import {combineReducers} from 'redux'
import {libraryReducer, libraryListReducer} from './library'

export const rootReducer = combineReducers({
  library: libraryReducer,
  libraryList: libraryListReducer
})
