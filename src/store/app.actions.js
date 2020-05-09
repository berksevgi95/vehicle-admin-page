export const CHANGE_LAYOUT = "CHANGE_LAYOUT"
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE"

export const changeLayout = (layout) => {
    return {
        type : CHANGE_LAYOUT,
        payload : layout
    }
}

export const changeLanguage = (lang) => {
    return {
        type : CHANGE_LANGUAGE,
        payload : lang
    }
}