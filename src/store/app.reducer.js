import * as AppActions from './app.actions'

const appState = {
    layout : 'layout1',
}

const app = (state = appState, action) => {
    switch (action.type) {
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