import {
    SET_PARAMS_LIST_VIEW
} from '../actions/types'

export default function( state = { page: 0, sorted: [], pageSize: 10 }, action ){
    switch (action.type) {
        case SET_PARAMS_LIST_VIEW:
            return { ...state, ...action.payload }

        default:
            return { ...state }
    }
}
