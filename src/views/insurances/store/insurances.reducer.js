import * as InsurancesActions from './insurances.actions'
import { List } from 'immutable'

const insurancesState = {
    insurances : List(),
    addInsuranceDialog : {
        open : false,
        data : null
    },
    insuranceFilterbar : {
        open : false,
        data : null
    }
}

const insurances = (state = insurancesState, action) => {
    switch (action.type) {
        case InsurancesActions.GET_INSURANCES : {
            return {
                ...state,
                insurances : List(action.payload)
            }
        }
        case InsurancesActions.POST_INSURANCE : {
            return {
                ...state,
                insurances : List(action.payload)
            }
        }
        case InsurancesActions.RESET_INSURANCES : {
            return {
                ...insurancesState
            }
        }
        case InsurancesActions.OPEN_INSURANCE_FORM : {
            return {
                ...state,
                addInsuranceDialog : {
                    open : true,
                    data : action.payload
                }
            }
        }
        case InsurancesActions.CLOSE_INSURANCE_FORM : {
            return {
                ...state,
                addInsuranceDialog : {
                    open : false,
                    data : null
                }
            }
        }
        case InsurancesActions.OPEN_INSURANCE_FILTERBAR : {
            return {
                ...state,
                insuranceFilterbar : {
                    ...state.insuranceFilterbar,
                    open : true,
                }
            }
        }
        case InsurancesActions.CLOSE_INSURANCE_FILTERBAR : {
            return {
                ...state,
                insuranceFilterbar : {
                    ...state.insuranceFilterbar,
                    open : false,
                }
            }
        }
        default:
            return state
    }
}

export default insurances