import _ from 'lodash'

import {
    FETCH_NOTES,
    FETCH_NOTE,
    CREATE_NOTE,
    UPDATE_NOTE,
    DELETE_NOTE
} from '../actions/types'

export default function( state = {}, action ){
    switch (action.type) {
        case FETCH_NOTES:
            return _.mapKeys(action.payload.data, 'id')

        case FETCH_NOTE:
        case CREATE_NOTE:
        case UPDATE_NOTE:
            return { ...state, [action.payload.data.id]: action.payload.data }

        case DELETE_NOTE:
            return { ...state }

        default:
            return { ...state }
    }
}
