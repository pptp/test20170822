import * as redux from 'redux';
import reducers from 'src/reduces/index';

import thunk from 'redux-thunk'

module.exports = function(initialState) {
  const store = redux.createStore(
    reducers,
    initialState,
    redux.applyMiddleware(thunk)
  )

  if (module.hot) {
    module.hot.accept('src/reduces/index', () => {
      const nextReducer = require('src/reduces/index')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
