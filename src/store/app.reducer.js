import * as AppActions from './app.actions'

const appState = {
    lang: 'en',
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
        case AppActions.CHANGE_LANGUAGE : {
            return {
                ...state,
                lang: action.payload
            }
        }
        default:
            return state
    }
}

export default app