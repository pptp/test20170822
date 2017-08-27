import {
  COUNTRIES_UPDATE_PROCESS,
  COUNTRIES_UPDATE_SUCCESS,
  COUNTRIES_UPDATE_FAIL,
  COUNTRIES_SELECT
} from './consts'

import { server } from 'src/config'

export function countriesUpdateList(payload) {
  const text = '' + payload;

  return dispatch => {
    dispatch({
      type: COUNTRIES_UPDATE_PROCESS,
      payload
    })

    const result = fetch(`${server.url}/countries/${text}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then((result) => {
        result.json().then((json) => {
          dispatch({
            type: COUNTRIES_UPDATE_SUCCESS,
            info: json
          })
        })
      })
      .catch((result) => {
        result.json().then((json) => {
          dispatch({
            type: COUNTRIES_UPDATE_FAIL,
            info: json
          })
        })
      })
  }
}

export function countrySelects(payload) {
  return dispatch => dispatch({
    type: COUNTRIES_SELECT,
    info: payload
  });
}