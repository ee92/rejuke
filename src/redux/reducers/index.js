import {combineReducers} from 'redux'
import {uploadReducer} from './upload'
import {libraryReducer, libraryListReducer} from './library'

export const rootReducer = combineReducers({
  uploadList: uploadReducer,
  library: libraryReducer,
  libraryList: libraryListReducer
})
