import * as AccidentsActions from './accidents.actions'
import { List } from 'immutable'

const accidentsState = {
    accidents : List(),
    accidentFilterbar : {
        open : false,
        data : null
    },
    accidentFilters : null
}

const accidents = (state = accidentsState, action) => {
    switch (action.type) {
        case AccidentsActions.GET_ACCIDENTS : {
            return {
                ...state,
                accidents : List(action.payload)
            }
        }
        case AccidentsActions.POST_ACCIDENT : {
            return {
                ...state,
                accidents : List(action.payload)
            }
        }
        case AccidentsActions.DELETE_ACCIDENT : {
            return {
                ...state,
                accidents: state.accidents
                    && state.accidents.size > 0
                    && state.accidents.filter((accident) => (
                        accident.id !== action.payload.id
                    ))
            }
        }
        case AccidentsActions.RESET_ACCIDENTS : {
            return {
                ...accidentsState
            }
        }
        case AccidentsActions.OPEN_ACCIDENT_FILTERBAR : {
            return {
                ...state,
                accidentFilterbar : {
                    ...state.accidentFilterbar,
                    open : true,
                }
            }
        }
        case AccidentsActions.CLOSE_ACCIDENT_FILTERBAR : {
            return {
                ...state,
                accidentFilterbar : {
                    ...state.accidentFilterbar,
                    open : false,
                }
            }
        }
        case AccidentsActions.ADD_ACCIDENT_FILTER : {
            return {
                ...state,
                accidentFilters: action.payload
            }
        }
        case AccidentsActions.DELETE_ACCIDENT_FILTER : {
            return {
                ...state,
                accidentFilters: state.accidentFilters
                    && state.accidentFilters.length > 0
                    && state.accidentFilters.filter(
                        accident => accident.field !== action.payload.field
                    )
            }
        }
        default:
            return state
    }
}

export default accidents