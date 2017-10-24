import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import ModulesReducer from './reducer_modules'
import ModulePtyGroupsReducer from './reducer_module_pty_groups'
import UIModulePtyGroupReducer from './reducer_ui_module_pty_group'

const rootReducer = combineReducers({
    form: formReducer,
    modules: ModulesReducer,
    modulePtyGroups: ModulePtyGroupsReducer,
    uiModulePtyGroupReducer: UIModulePtyGroupReducer
})

export default rootReducer
