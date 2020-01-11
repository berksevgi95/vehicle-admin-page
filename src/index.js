import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import app from './store/app.reducer'

let store = createStore(app)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)