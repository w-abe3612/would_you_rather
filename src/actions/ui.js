export const RECEIVE_UI_STATES = 'RECEIVE_UI_STATES'
export const TOGGLE_BUTTON = 'TOGGLE_BUTTON'
//todo:タブの切り替え
//todo:セレクトボタンの表示非表示

export function receiveUiStates (ui) {
    return {
        type:RECEIVE_UI_STATES,
        ui
    }
}

export function toggleButton (ui) {
    return {
        type:TOGGLE_BUTTON,
        ui
    }
}