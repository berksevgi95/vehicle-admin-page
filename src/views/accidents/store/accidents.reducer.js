import * as AccidentsActions from './accidents.actions'
import { List } from 'immutable'

const accidentsState = {
    accidents : List(),
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
        case AccidentsActions.RESET_ACCIDENTS : {
            return {
                ...accidentsState
            }
        }
        default:
            return state
    }
}

export default accidents