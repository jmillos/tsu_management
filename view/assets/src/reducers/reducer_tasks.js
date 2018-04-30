import _ from 'lodash'

import {
    FETCH_TASKS,
    CREATE_TASK,
    FETCH_TASK,
    UPDATE_TASK,
    DELETE_TASK,
    CLEAR_TASKS
} from '../actions/types'

export default function( state = {}, action ){
    switch (action.type) {
        case FETCH_TASKS:
            return _.mapKeys(action.payload.data, 'id')

        case FETCH_TASK:
        case CREATE_TASK:
        case UPDATE_TASK:
            return { ...state, [action.payload.data.id]: action.payload.data }

        case DELETE_TASK:
            return { ...state }

        case CLEAR_TASKS:
            return {}

        default:
            return { ...state }
    }
}
