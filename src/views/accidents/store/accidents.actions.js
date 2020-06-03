// import { get, post } from '../../../utils/request'
import { Accidents } from '../../../@fake-db'

export const GET_ACCIDENTS = "GET_ACCIDENTS"
export const POST_ACCIDENT = "POST_ACCIDENT"
export const DELETE_ACCIDENT = "DELETE_ACCIDENT"
export const RESET_ACCIDENTS = "RESET_ACCIDENTS"
export const OPEN_ACCIDENT_FILTERBAR = "OPEN_ACCIDENT_FILTERBAR"
export const CLOSE_ACCIDENT_FILTERBAR = "CLOSE_ACCIDENT_FILTERBAR"
export const ADD_ACCIDENT_FILTER = "ADD_ACCIDENT_FILTER"
export const DELETE_ACCIDENT_FILTER = "DELETE_ACCIDENT_FILTER"

export const getAccidents = () => {
    return (dispatch) => {
        // return get("http://localhost:5500", "/accidents", (response) => {
        //     dispatch({
        //         type : GET_ACCIDENTS,
        //         payload : response
        //     })
        //     return new Promise((resolve, reject) => resolve(response))
        // }, (exception) => {
        //     window.messageRef.fire({
        //         message: exception.error,
        //         type: EMessageTypes.ERROR,
        //         timeout: 5000
        //     })
        // })
        dispatch({
            type : GET_ACCIDENTS,
            payload : Accidents
        })
    }
}

export const postAccident = (id, accident) => {
    return (dispatch) => {
        // return post("http://localhost:5500", "/accidents", accident, (response) => {
        //     dispatch({
        //         type : POST_ACCIDENT,
        //         payload : response
        //     })
        //     window.messageRef.fire({
        //         message: "Accident has been added",
        //         type: EMessageTypes.SUCCESS,
        //         timeout: 5000
        //     })
        //     return new Promise((resolve, reject) => resolve(response))
        // }, (exception) => {
        //     window.messageRef.fire({
        //         message: exception.error,
        //         type: EMessageTypes.ERROR,
        //         timeout: 5000
        //     })
        // })
        dispatch({
            type : POST_ACCIDENT,
            payload: { id, accident }
        })

        return new Promise((resolve, reject) => resolve());
    }
}

export const deleteAccident = (accident) => {
    return (dispatch) => {
        // return post("http://localhost:5500", "/", vehicle, (response) => {
        //     dispatch({
        //         type : POST_VEHICLE,
        //         payload : response
        //     })
        //     window.messageRef.fire({
        //         message: "Vehicle has been added",
        //         type: EMessageTypes.SUCCESS,
        //         timeout: 5000
        //     })
        //     return new Promise((resolve, reject) => resolve(response))
        // }, (exception) => {
        //     window.messageRef.fire({
        //         message: exception.error,
        //         type: EMessageTypes.ERROR,
        //         timeout: 5000
        //     })
        // })

        dispatch({
            type : DELETE_ACCIDENT,
            payload: accident
        })

        return new Promise((resolve, reject) => resolve());
    }
}

export const resetAccidents = () => {
    return {
        type : RESET_ACCIDENTS,
    }
}

export const openAccidentFilterbar = () => {
    return {
        type : OPEN_ACCIDENT_FILTERBAR
    }
}

export const closeAccidentFilterbar = () => {
    return {
        type : CLOSE_ACCIDENT_FILTERBAR
    }
}

export const addAccidentFilter = (filter) => {
    return {
        type: ADD_ACCIDENT_FILTER,
        payload: filter
    }
}

export const deleteAccidentFilter = (filter) => {
    return {
        type: DELETE_ACCIDENT_FILTER,
        payload: filter
    }
}