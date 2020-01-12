import * as VehiclesActions from './vehicles.actions'

const vehiclesState = {
    vehicles : [],
    addVehicleDialog : {
        open : false,
        data : null
    }
}

const vehicles = (state = vehiclesState, action) => {
    switch (action.type) {
        case VehiclesActions.GET_VEHICLES : {
            return {
                ...state,
                vehicles : action.payload
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
        default:
            return state
    }
}

export default vehicles