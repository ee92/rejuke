import { GET_LIBRARY, GET_LIBRARY_SUCCESS } from '../actions/library'
import { db, storage } from '../../firebase'

const getLibrary = ({dispatch}) => next => action => {
  next(action)
  if (action.type === GET_LIBRARY) {
    db.ref('files').once('value')
    .then((snap) => {
      dispatch({type: GET_LIBRARY_SUCCESS, payload: snap.val()})
    })
  }
}

export default [getLibrary]
