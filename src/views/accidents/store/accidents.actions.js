import { get, post } from '../../../utils/request'
import { NotificationManager } from 'react-notifications'

export const GET_ACCIDENTS = "GET_ACCIDENTS"
export const POST_ACCIDENT = "POST_ACCIDENT"
export const RESET_ACCIDENTS = "RESET_ACCIDENTS"

export const getAccidents = () => {
    return (dispatch) => {
        return get("http://localhost:5500", "/accidents", (response) => {
            dispatch({
                type : GET_ACCIDENTS,
                payload : response
            })
            return new Promise((resolve, reject) => resolve(response))
        }, (exception) => {
            NotificationManager.error(exception.error)
        })
    }
}

export const postVehicle = (accident) => {
    return (dispatch) => {
        return post("http://localhost:5500", "/accidents", accident, (response) => {
            dispatch({
                type : POST_ACCIDENT,
                payload : response
            })
            NotificationManager.success("Accident has been added")
            return new Promise((resolve, reject) => resolve(response))
        }, (exception) => {
            NotificationManager.error(exception.error)
        })
    }
}

export const resetAccidents = () => {
    return {
        type : RESET_ACCIDENTS,
    }
}
