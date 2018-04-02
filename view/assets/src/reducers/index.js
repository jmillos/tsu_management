import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import UsersReducer from './reducer_users'
import ModulesReducer from './reducer_modules'
import PtyGroupsReducer from './reducer_pty_groups'
import PropertiesReducer from './reducer_properties'
import RecordsReducer from './reducer_records'
import NotesReducer from './reducer_notes'
import ActivitiesReducer from './reducer_activities'
import UIModuleReducer from './reducer_ui_module'

const rootReducer = combineReducers({
    form: formReducer,
    users: UsersReducer,
    modules: ModulesReducer,
    ptyGroups: PtyGroupsReducer,
    properties: PropertiesReducer,
    records: RecordsReducer,
    notes: NotesReducer,
    activities: ActivitiesReducer,
    uiModule: UIModuleReducer
})

export default rootReducer
