// import { get, post } from '../../../utils/request'
import { Vehicles } from '../../../@fake-db'

export const GET_VEHICLES = "GET_VEHICLES"
export const POST_VEHICLE = "POST_VEHICLE"
export const EDIT_VEHICLE = "EDIT_VEHICLE"
export const DELETE_VEHICLE = "DELETE_VEHICLE"
export const RESET_VEHICLES = "RESET_VEHICLES"
export const OPEN_VEHICLE_FORM = "OPEN_VEHICLE_FORM"
export const CLOSE_VEHICLE_FORM = "CLOSE_VEHICLE_FORM"
export const OPEN_VEHICLE_FILTERBAR = "OPEN_VEHICLE_FILTERBAR"
export const CLOSE_VEHICLE_FILTERBAR = "CLOSE_VEHICLE_FILTERBAR"

export const ADD_VEHICLE_FILTER = "ADD_VEHICLE_FILTER"
export const DELETE_VEHICLE_FILTER = "DELETE_VEHICLE_FILTER"


export const getVehicles = () => {
    return (dispatch) => {
        // return get("http://localhost:5500", "/", (response) => {
        //     dispatch({
        //         type : GET_VEHICLES,
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
            type : GET_VEHICLES,
            payload : Vehicles
        })
    }
}

export const postVehicle = (vehicle) => {
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
            type : POST_VEHICLE,
            payload: vehicle
        })

        return new Promise((resolve, reject) => resolve());
    }
}

export const editVehicle = (id, vehicle) => {
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
            type : EDIT_VEHICLE,
            payload: { id, vehicle }
        })

        return new Promise((resolve, reject) => resolve());
    }
}

export const deleteVehicle = (vehicle) => {
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
            type : DELETE_VEHICLE,
            payload: vehicle
        })

        return new Promise((resolve, reject) => resolve());
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

export const openVehicleFilterbar = () => {
    return {
        type : OPEN_VEHICLE_FILTERBAR
    }
}

export const closeVehicleFilterbar = () => {
    return {
        type : CLOSE_VEHICLE_FILTERBAR
    }
}

export const addVehicleFilter = (filter) => {
    return {
        type: ADD_VEHICLE_FILTER,
        payload: filter
    }
}

export const deleteVehicleFilter = (filter) => {
    return {
        type: DELETE_VEHICLE_FILTER,
        payload: filter
    }
}