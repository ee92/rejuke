import {
  SELECT_FILE,
  UPLOAD,
  UPLOAD_SUCCESS,
  UPLOAD_FAIL,
  RECORD_UPLOAD_SUCCESS,
  RECORD_UPLOAD_FAIL,
  UPDATE_URL_SUCCESS,
  UPDATE_URL_FAIL
} from '../actions/upload'
import { db, storage } from '../../firebase'

const selectFile = ({dispatch}) => next => action => {
  next(action)
  if (action.type === SELECT_FILE) {
    dispatch({type: UPLOAD, payload: action.payload})
  }
}
const upload = ({dispatch}) => next => action => {
  next(action)
  if (action.type === UPLOAD) {
    let ref = db.ref('files').push()
    storage.ref('files/' + ref.key).put(action.payload)
    .then((snap) => {
      dispatch({type: UPLOAD_SUCCESS, payload: action.payload, ref: ref})
    })
    .catch((err) => dispatch({type: UPLOAD_FAIL, payload: err}))
  }
}
const geturl = ({dispatch}) => next => action => {
  next(action)
  if (action.type === UPLOAD_SUCCESS) {
    let query = action.ref.key
    storage.ref('files/' + query).getDownloadURL()
    .then((url) => {
      dispatch({type: UPDATE_URL_SUCCESS, payload: action.payload, ref: action.ref, url})
    })
    .catch((err) => dispatch({type: UPDATE_URL_FAIL, payload: action.payload, ref: action.ref}))
  }
}
const record = ({dispatch}) => next => action => {
  next(action)
  if (action.type === UPDATE_URL_SUCCESS) {
    action.ref.set({
      url: action.url,
      id: action.ref.key,
      name: action.payload.name,
      timestamp: Date.now()
    })
    .then(() => dispatch({type: RECORD_UPLOAD_SUCCESS, payload: action.payload}))
    .catch((err) => dispatch({type: RECORD_UPLOAD_FAIL, payload: err}))
  }
}

export default [selectFile, upload, geturl, record]
