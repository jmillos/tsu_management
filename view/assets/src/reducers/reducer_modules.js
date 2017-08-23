import { FETCH_MODULES } from '../actions/types'

export default function( state = { list: [] }, action ){
    switch (action.type) {
        case FETCH_MODULES:
            return { ...state, list: action.payload.data }
            break;

        default:
            return { ...state }
    }
}
