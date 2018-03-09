import _ from 'lodash'

import {
    FETCH_PROPERTIES,
    FETCH_PROPERTY,
    CREATE_PTY,
    UPDATE_PTY
} from '../actions/types'

export default function( state = {}, action ){
    switch (action.type) {
        case FETCH_PROPERTIES:
            return _.mapKeys(action.payload.data, 'id')

        case FETCH_PROPERTY:
        case CREATE_PTY:
        case UPDATE_PTY:
            return { ...state, [action.payload.data.id]: action.payload.data }

        default:
            return { ...state }
    }
}
