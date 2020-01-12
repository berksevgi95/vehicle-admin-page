import * as VehiclesActions from './vehicles.actions'

const vehiclesState = {
    vehicles : []
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
        default:
            return state
    }
}

export default vehicles