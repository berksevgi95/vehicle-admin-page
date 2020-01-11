import * as AppActions from './app.actions'

const appState = {
    layout : 'layout1',
    sidebar : true
}

const app = (state = appState, action) => {
    switch (action.type) {
        case AppActions.OPEN_SIDEBAR : {
            return {
                ...state,
                sidebar : true
            }
        }
        case AppActions.CLOSE_SIDEBAR : {
            return {
                ...state,
                sidebar : false
            }
        }
        case AppActions.CHANGE_LAYOUT : {
            return {
                ...state,
                layout : action.payload
            }
        }
        default:
            return state
    }
}

export default app