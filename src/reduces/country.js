import { init } from 'src/core/countries';

const initialState = init();


export default function country(state = initialState, action) {
  const callbacks = {
    //  
  };

  const callback = callbacks[action.type]
  if (callback) {
    return callback.call(this, state, action.payload);
  }

  return state;
}
