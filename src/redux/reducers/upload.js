import { RECORD_UPLOAD_SUCCESS } from '../actions/upload'

export function uploadReducer(uploadList = [], action) {
  switch (action.type) {
    case RECORD_UPLOAD_SUCCESS:
      return [...uploadList, action.payload]
    default:
      return uploadList
  }
  return uploadList
}
