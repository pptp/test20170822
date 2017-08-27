import {
  COUNTRIES_UPDATE_PROCESS,
  COUNTRIES_UPDATE_SUCCESS,
  COUNTRIES_UPDATE_FAIL,
  COUNTRIES_SELECT
} from 'src/actions/consts'

import { countriesUpdateList } from 'src/actions/country.actions'

const initialState = {
  loading: false,
  countryList: [],
  errors: null,
  selected: null
};

export default function country(state = initialState, action) {
  switch (action.type) {
    case COUNTRIES_UPDATE_PROCESS:
      return { loading: true };

    case COUNTRIES_UPDATE_SUCCESS:
      return { loading: false, countryList: action.info };

    case COUNTRIES_UPDATE_FAIL:
      return { loading: false, countryList: [], errors: action.errors };

    case COUNTRIES_SELECT: {
      const key = action.info;
      return { selected: state.countryList[key] };
    }
  }

  return state;
}
