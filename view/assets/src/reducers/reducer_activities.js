import _ from 'lodash'

import {
    FETCH_ACTIVITIES,
    CREATE_ACTIVITY,
    FETCH_ACTIVITY,
    UPDATE_ACTIVITY,
    DELETE_ACTIVITY,
    CLEAR_ACTIVITIES
} from '../actions/types'

export default function( state = {}, action ){
    switch (action.type) {
        case FETCH_ACTIVITIES:
            return _.mapKeys(action.payload.data, 'id')

        case FETCH_ACTIVITY:
        case CREATE_ACTIVITY:
        case UPDATE_ACTIVITY:
            return { ...state, [action.payload.data.id]: action.payload.data }

        case DELETE_ACTIVITY:
            return { ...state }

        case CLEAR_ACTIVITIES:
            return {}

        default:
            return { ...state }
    }
}
