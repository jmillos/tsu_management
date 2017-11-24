import {
    SET_MODE_EDIT,
    SET_MODE_CREATE,
    SET_MODE_CUSTOMIZER,
    SET_DIALOG_OPEN
} from '../actions/types'

export default function( state = { modeEdit: false, modeCreate: false, modeCustomizer: false, dialogOpen: false }, action ){
    switch (action.type) {
        case SET_MODE_EDIT:
            return { ...state, modeEdit: action.payload, dialogOpen: action.payload }

        case SET_MODE_CREATE:
            return { ...state, modeCreate: action.payload, dialogOpen: action.payload }

        case SET_MODE_CUSTOMIZER:
            return { ...state, modeCustomizer: action.payload, dialogOpen: action.payload }

        case SET_DIALOG_OPEN:
            return { ...state, dialogOpen: action.payload }

        default:
            return { ...state }
    }
}
