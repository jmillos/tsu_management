import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import ModulesReducer from './reducer_modules'
import PtyGroupsReducer from './reducer_pty_groups'
import PropertiesReducer from './reducer_properties'
import RecordsReducer from './reducer_records'
import UIModuleReducer from './reducer_ui_module'

const rootReducer = combineReducers({
    form: formReducer,
    modules: ModulesReducer,
    ptyGroups: PtyGroupsReducer,
    properties: PropertiesReducer,
    records: RecordsReducer,
    uiModule: UIModuleReducer
})

export default rootReducer
