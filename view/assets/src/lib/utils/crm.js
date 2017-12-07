import _ from 'lodash'
import { CURRENT_USER_ID } from '../../config'

export function getGridColumnsCurrentUser(users, moduleId, properties){
    const currentUser = users[CURRENT_USER_ID]
    const modulePreferences = currentUser && currentUser.crm_module_preferences ? currentUser.crm_module_preferences:[]

    return modulePreferences[moduleId] && modulePreferences[moduleId].gridCols ? modulePreferences[moduleId].gridCols:[]

    const columns = _.maps([...properties], i => i.id !== field.id)
}
