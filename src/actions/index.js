
export const addVehicle = (lat, lng) => {
  return {
    type: 'ADD_VEHICLE',
    payload : {lat, lng}
  }
}

export const addRoute = (newRoute) => {
  return {
    type: 'ADD_ROUTE',
    payload : {newRoute}
  }
}

export const changeVehicle = (routeId, vehicle) => {
  return {
    type : 'CHANGE_VEHICLE',
    payload : {routeId, vehicle}
  }
}

export const changeFilterDate = (date) => {
  return {
    type : 'CHANGE_FILTER_DATE',
    payload : date
  }
}

export const changeRouteFilter = (route) => {
  return {
    type : 'CHANGE_ROUTE_FILTER',
    payload : route
  }
}

export const changeVehicleFilter = (vehicle) => {
  return {
    type : 'CHANGE_VEHICLE_FILTER',
    payload : vehicle
  }
}