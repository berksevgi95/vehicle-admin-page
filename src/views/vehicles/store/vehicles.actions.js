import { get, post } from '../../../utils/request'
import { EMessageTypes } from 'bs-ui-components'

export const GET_VEHICLES = "GET_VEHICLES"
export const POST_VEHICLE = "POST_VEHICLE"
export const RESET_VEHICLES = "RESET_VEHICLES"
export const OPEN_VEHICLE_FORM = "OPEN_VEHICLE_FORM"
export const CLOSE_VEHICLE_FORM = "CLOSE_VEHICLE_FORM"
export const OPEN_VEHICLE_FILTERBAR = "OPEN_VEHICLE_FILTERBAR"
export const CLOSE_VEHICLE_FILTERBAR = "CLOSE_VEHICLE_FILTERBAR"

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
            payload : [{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },
            {
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },{
                id: 1,
                brand: 'asdasd',
                modelName: 'asdnömvxcövn',
                req: 10,
                reqAlter: 41
            },]
        })
    }
}

export const postVehicle = (vehicle) => {
    return (dispatch) => {
        return post("http://localhost:5500", "/", vehicle, (response) => {
            dispatch({
                type : POST_VEHICLE,
                payload : response
            })
            window.messageRef.fire({
                message: "Vehicle has been added",
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