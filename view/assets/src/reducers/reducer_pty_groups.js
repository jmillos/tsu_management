import _ from 'lodash'
import { FETCH_PTY_GROUPS, CREATE_PTY_GROUP, UPDATE_PTY_GROUP, CREATE_PTY } from '../actions/types'

export default function( state = {}, action ){
    switch (action.type) {
        case FETCH_PTY_GROUPS:
            return _.mapKeys(action.payload.data, 'id')

        case CREATE_PTY_GROUP:
        case UPDATE_PTY_GROUP:
            return { ...state, [action.payload.data.id]: action.payload.data }

        // case DELETE_POST:
            // return _.omit(state, action.payload)

        default:
            return { ...state }
    }
}
