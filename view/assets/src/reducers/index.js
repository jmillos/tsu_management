import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import ModulesReducer from './reducer_modules'

const rootReducer = combineReducers({
    form: formReducer,
    modules: ModulesReducer
})

export default rootReducer
