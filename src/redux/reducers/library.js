import { GET_LIBRARY_SUCCESS } from '../actions/library'

export function libraryReducer(mediaFiles = {}, action) {
  switch (action.type) {
    case GET_LIBRARY_SUCCESS:
      return action.payload
    default:
      return mediaFiles
  }
}

export function libraryListReducer(fileIds = [], action) {
  switch (action.type) {
    case GET_LIBRARY_SUCCESS:
      return Object.keys(action.payload)
    default:
      return fileIds
  }
}
