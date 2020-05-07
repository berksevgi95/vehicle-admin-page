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
    }
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
                vehicles : List(action.payload)
            }
        }
        case VehiclesActions.DELETE_VEHICLE : {
            return {
                ...state,
                vehicles : List(action.payload)
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
        default:
            return state
    }
}

export default vehicles