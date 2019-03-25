import { SELECT_FILE } from '../actions/upload'

export function uploadReducer(upload = {}, action) {
  switch (action.type) {
    case SELECT_FILE:
      return action.payload
    default:
      return upload
  }
}
