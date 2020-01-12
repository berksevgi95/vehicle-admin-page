export const CHANGE_LAYOUT = "CHANGE_LAYOUT"

export const changeLayout = (layout) => {
    return {
        type : CHANGE_LAYOUT,
        payload : layout
    }
}