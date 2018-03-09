import _ from 'lodash'

import {
    FETCH_RECORDS,
    FETCH_RECORD,
    CREATE_RECORD,
    UPDATE_RECORD,
    DELETE_RECORD
} from '../actions/types'

export default function( state = {}, action ){
    switch (action.type) {
        case FETCH_RECORDS:
            return _.mapKeys(action.payload.data, 'id')

        case FETCH_RECORD:
        case CREATE_RECORD:
        case UPDATE_RECORD:
            return { ...state, [action.payload.data.id]: action.payload.data }

        case DELETE_RECORD:
            return { ...state }

        default:
            return { ...state }
    }
}
