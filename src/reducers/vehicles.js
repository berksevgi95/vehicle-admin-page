import { Vehicles, VehicleStatus } from "../@fake-db";

const VehiclesState = (state = Vehicles, action) => {
    switch (action.type) {
        case 'ADD_VEHICLE':
            {
                state.push({
                    id: state.length + 1,
                    name: `New Vehicle ${state.length}`,
                    status: VehicleStatus[0],
                    coord: action.payload
                })
                return [...state]
            }
        case 'CHANGE_VEHICLE_FILTER' : 
            {
              return state.map(v => ({
                ...v,
                vehicleFilter : action.payload
              }))
            }
        default:
            return state
    }
}

export default VehiclesState