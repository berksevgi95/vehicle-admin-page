import { Routes } from "../@fake-db";

const RoutesState = (state = Routes, action) => {
  switch (action.type) {
    case 'CHANGE_VEHICLE':
    {
      const newState = [...state]
      const route = newState.filter(route => route.id === parseInt(action.payload.routeId))[0]
      route && (route.vehicle = action.payload.vehicle)
      return newState
    }
    case 'ADD_ROUTE':
    {
      const newRoute = action.payload.newRoute;
      newRoute.id = state.length + 1;
      const newState = [...state, newRoute]
      return newState
    }
    case 'CHANGE_FILTER_DATE' : 
    {
      return state.map(s => ({
        ...s,
        filterDate : action.payload
      }))
    }
    case 'CHANGE_ROUTE_FILTER' : 
    {
      return state.map(s => ({
        ...s,
        routeFilter : action.payload
      }))
    }
    default:
      return state
  }
}

export default RoutesState