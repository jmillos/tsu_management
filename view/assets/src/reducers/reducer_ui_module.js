import {
    SET_MODE_EDIT,
    SET_MODE_CREATE
} from '../actions/types'

export default function( state = { modeEdit: false, modeCreate: false }, action ){
    switch (action.type) {
        case SET_MODE_EDIT:
            return { ...state, modeEdit: action.payload }

        case SET_MODE_CREATE:
            return { ...state, modeCreate: action.payload }

        default:
            return { ...state }
    }
}
