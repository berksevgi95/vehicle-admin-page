import * as VehiclesActions from './vehicles.actions'
import { List } from 'immutable'

const vehiclesState = {
    vehicles : List(),
    addVehicleDialog : {
        open : false,
        data : null
    },
    vehicleFilterbar : {
        open : false,
        data : null
    },
    vehicleFilters : null
}

const vehicles = (state = vehiclesState, action) => {
    switch (action.type) {
        case VehiclesActions.GET_VEHICLES : {
            return {
                ...state,
                vehicles : List(action.payload)
            }
        }
        case VehiclesActions.POST_VEHICLE : {
            return {
                ...state,
                vehicles: List([...state.vehicles, {
                    id: state.vehicles.size + 1,
                    ...action.payload
                }])
            }
        }
        case VehiclesActions.DELETE_VEHICLE : {
            return {
                ...state,
                vehicles: state.vehicles
                    && state.vehicles.size > 0
                    && state.vehicles.filter((vehicle) => (
                        vehicle.id !== action.payload.id
                    ))
            }
        }
        case VehiclesActions.RESET_VEHICLES : {
            return {
                ...vehiclesState
            }
        }
        case VehiclesActions.OPEN_VEHICLE_FORM : {
            return {
                ...state,
                addVehicleDialog : {
                    open : true,
                    data : action.payload
                }
            }
        }
        case VehiclesActions.CLOSE_VEHICLE_FORM : {
            return {
                ...state,
                addVehicleDialog : {
                    open : false,
                    data : null
                }
            }
        }
        case VehiclesActions.OPEN_VEHICLE_FILTERBAR : {
            return {
                ...state,
                vehicleFilterbar : {
                    ...state.vehicleFilterbar,
                    open : true,
                }
            }
        }
        case VehiclesActions.CLOSE_VEHICLE_FILTERBAR : {
            return {
                ...state,
                vehicleFilterbar : {
                    ...state.vehicleFilterbar,
                    open : false,
                }
            }
        }
        case VehiclesActions.ADD_VEHICLE_FILTER : {
            return {
                ...state,
                vehicleFilters: action.payload
            }
        }
        case VehiclesActions.DELETE_VEHICLE_FILTER : {
            return {
                ...state,
                vehicleFilters: state.vehicleFilters
                    && state.vehicleFilters.length > 0
                    && state.vehicleFilters.filter(
                        vehicle => vehicle.field !== action.payload.field
                    )
            }
        }
        default:
            return state
    }
}

export default vehicles