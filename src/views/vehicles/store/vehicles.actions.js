import {get} from '../../../utils/request'

export const GET_VEHICLES = "GET_VEHICLES"
export const RESET_VEHICLES = "RESET_VEHICLES"

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
