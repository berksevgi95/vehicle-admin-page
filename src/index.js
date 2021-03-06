import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'

import app from './store/app.reducer'
import vehicles from './views/vehicles/store/vehicles.reducer'
import accidents from './views/accidents/store/accidents.reducer'
import insurances from './views/insurances/store/insurances.reducer'

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    app,
    vehicles,
    accidents,
    insurances
  }),
  composer(
    applyMiddleware(thunk),
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)