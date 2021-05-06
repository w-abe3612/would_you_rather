export const RECEIVE_TOGGLE_FLG = 'RECEIVE_TOGGLE_FLG'
export const TOGGLE_BUTTON = 'TOGGLE_BUTTON'
//todo:tab

export function receiveToggleFlg (header) {
    return {
        type:RECEIVE_TOGGLE_FLG,
        header
    }
}

export function toggleButton (toggleFlg) {
    return {
        type:TOGGLE_BUTTON,
        header:{
            toggleFlg:!toggleFlg
        }
    }
}