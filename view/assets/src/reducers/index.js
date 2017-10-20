import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import ModulesReducer from './reducer_modules'
import ModulePtyGroupsReducer from './reducer_module_pty_groups'

const rootReducer = combineReducers({
    form: formReducer,
    modules: ModulesReducer,
    modulePtyGroups: ModulePtyGroupsReducer
})

export default rootReducer
