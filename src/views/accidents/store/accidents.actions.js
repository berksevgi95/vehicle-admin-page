import { get, post } from '../../../utils/request'
import { EMessageTypes } from 'bs-ui-components'

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
            window.messageRef.fire({
                message: exception.error,
                type: EMessageTypes.ERROR,
                timeout: 5000
            })
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
            window.messageRef.fire({
                message: "Accident has been added",
                type: EMessageTypes.SUCCESS,
                timeout: 5000
            })
            return new Promise((resolve, reject) => resolve(response))
        }, (exception) => {
            window.messageRef.fire({
                message: exception.error,
                type: EMessageTypes.ERROR,
                timeout: 5000
            })
        })
    }
}

export const resetAccidents = () => {
    return {
        type : RESET_ACCIDENTS,
    }
}
