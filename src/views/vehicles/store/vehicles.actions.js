import {get} from '../../../utils/request'

export const GET_VEHICLES = "GET_VEHICLES"
export const RESET_VEHICLES = "RESET_VEHICLES"
export const OPEN_VEHICLE_FORM = "OPEN_VEHICLE_FORM"
export const CLOSE_VEHICLE_FORM = "CLOSE_VEHICLE_FORM"

export const getVehicles = () => {
    return (dispatch) => {
        return get("http://localhost:5500", "/", (response) => {
            dispatch({
                type : GET_VEHICLES,
                payload : response
            })
        }, (error) => {
            
        })
    }
    
    
}

export const resetVehicles = () => {
    return {
        type : RESET_VEHICLES,
    }
}

export const openVehicleForm = (vehicle) => {
    return {
        type : OPEN_VEHICLE_FORM,
        payload : vehicle
    }
}

export const closeVehicleForm = () => {
    return {
        type : CLOSE_VEHICLE_FORM,
    }
}