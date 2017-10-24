import { EDIT_PTY_GROUP_NAME } from '../actions/types'

export default function( state = { editPtyGroupName: false }, action ){
    switch (action.type) {
        case EDIT_PTY_GROUP_NAME:
            return { ...state, editPtyGroupName: action.payload }

        default:
            return { ...state }
    }
}
