import { EDIT_PTY_GROUP_NAME } from '../actions/types'

export default function( state = { modeEdit: false }, action ){
    switch (action.type) {
        case EDIT_PTY_GROUP_NAME:
            return { ...state, modeEdit: action.payload }

        default:
            return { ...state }
    }
}
