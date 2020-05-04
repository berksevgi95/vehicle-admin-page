import { get, post } from '../../../utils/request'
import { EMessageTypes } from 'bs-ui-components'

export const GET_INSURANCES = "GET_INSURANCES"
export const POST_INSURANCE = "POST_INSURANCE"
export const RESET_INSURANCES = "RESET_INSURANCES"
export const OPEN_INSURANCE_FORM = "OPEN_INSURANCE_FORM"
export const CLOSE_INSURANCE_FORM = "CLOSE_INSURANCE_FORM"
export const OPEN_INSURANCE_FILTERBAR = "OPEN_INSURANCE_FILTERBAR"
export const CLOSE_INSURANCE_FILTERBAR = "CLOSE_INSURANCE_FILTERBAR"

export const getInsurances = () => {
    return (dispatch) => {
        return get("http://localhost:5500", "/insurances", (response) => {
            dispatch({
                type : GET_INSURANCES,
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

export const postInsurances = (insurance) => {
    return (dispatch) => {
        return post("http://localhost:5500", "/insurances", insurance, (response) => {
            dispatch({
                type : POST_INSURANCE,
                payload : response
            })
            window.messageRef.fire({
                message: "Insurance has been added",
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

export const resetInsurances = () => {
    return {
        type : RESET_INSURANCES,
    }
}

export const openInsuranceForm = (insurance) => {
    return {
        type : OPEN_INSURANCE_FORM,
        payload : insurance
    }
}

export const closeInsuranceForm = () => {
    return {
        type : CLOSE_INSURANCE_FORM,
    }
}

export const openInsuranceFilterbar = () => {
    return {
        type : OPEN_INSURANCE_FILTERBAR
    }
}

export const closeInsuranceFilterbar = () => {
    return {
        type : CLOSE_INSURANCE_FILTERBAR
    }
}