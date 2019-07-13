import { combineReducers } from 'redux'
import routes from './routes'
import vehicles from './vehicles'
import drivers from './drivers'


const todoApp = combineReducers({
  routes,
  vehicles,
  drivers
})

export default todoApp