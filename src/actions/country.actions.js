import {
  COUNTRIES_UPDATE_PROCESS,
  COUNTRIES_UPDATE_SUCCESS,
  COUNTRIES_UPDATE_FAIL,
} from './consts'

export function countriesUpdateList(payload) {
  // return { type: COUNTRIES_UPDATE_LIST, payload: payload };

  return dispatch => {
    dispatch({
      type: COUNTRIES_UPDATE_PROCESS,
      payload
    })
  }
}