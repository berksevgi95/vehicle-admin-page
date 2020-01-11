import {get} from '../../../utils/request'

export const GET_VEHICLES = "GET_VEHICLES"

export const getVehicles = () => {
    return (dispatch) => {
        return get("http://localhost:4000", "/", (response) => {
            dispatch({
                type : GET_VEHICLES,
                payload : response
            })
        }, (error) => {
            
        })
    }
    
    
}
