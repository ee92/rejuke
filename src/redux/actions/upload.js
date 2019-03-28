export const ITEMS_DROPPED = 'ITEMS_DROPPED'
export const UPLOAD = 'UPLOAD'
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS'
export const UPLOAD_FAIL = 'UPLOAD_FAIL'
export const UPDATE_URL_SUCCESS = 'UPDATE_URL_SUCCESS'
export const UPDATE_URL_FAIL = 'UPDATE_URL_FAIL'
export const RECORD_UPLOAD_SUCCESS = 'RECORD_UPLOAD_SUCCESS'
export const RECORD_UPLOAD_FAIL = 'RECORD_UPLOAD_FAIL'

export const itemsDropped = (data) => {
  return {
    type: ITEMS_DROPPED,
    payload: data
  }
}
