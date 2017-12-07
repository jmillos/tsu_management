import {
    FETCH_USER,
    UPDATE_USER,
} from '../actions/types'

export default function( state = {}, action ){
    switch (action.type) {
        case FETCH_USER:
        case UPDATE_USER:
            return { ...state, [action.payload.data.id]: action.payload.data }

        default:
            return { ...state }
    }
}
