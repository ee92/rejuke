import { QUERY_DB, QUERY_DB_SUCCESS, QUERY_STORE, QUERY_STORE_SUCCESS } from '../actions/api'
import { db, storage } from '../../firebase'

const querydb = ({dispatch}) => next => action => {
  next(action)
  if (action.type === QUERY_DB) {
    let query = action.payload
    db.ref(query).once('value')
    .then((snap) => {
      dispatch({type: QUERY_DB_SUCCESS, payload: snap.val()})
    })
  }
}

// const querystore = ({dispatch}) => next => action => {
//   next(action)
//   if (action.type === QUERY_STORE) {
//     let query = action.payload
//     storage.ref(query).getDownloadURL()
//     .then((url) => {
//
//     })
//   }
// }

export default [querydb]
