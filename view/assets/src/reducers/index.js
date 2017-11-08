import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import ModulesReducer from './reducer_modules'
import PtyGroupsReducer from './reducer_pty_groups'
import PropertiesReducer from './reducer_properties'
import UIModulePtyGroupReducer from './reducer_ui_module_pty_group'

const rootReducer = combineReducers({
    form: formReducer,
    modules: ModulesReducer,
    ptyGroups: PtyGroupsReducer,
    properties: PropertiesReducer,
    uiModulePtyGroupReducer: UIModulePtyGroupReducer
})

export default rootReducer
