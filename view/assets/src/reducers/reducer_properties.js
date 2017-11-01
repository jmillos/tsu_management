import {
    FETCH_PROPERTIES,
    CREATE_PTY
} from '../actions/types'

export default function( state = {}, action ){
    switch (action.type) {
        case FETCH_PROPERTIES:
            return _.mapKeys(action.payload.data, 'id')

        case CREATE_PTY:
        // case UPDATE_PTY:
            return { ...state, [action.payload.data.id]: action.payload.data }

        default:
            return { ...state }
    }
}
