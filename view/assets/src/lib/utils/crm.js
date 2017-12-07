import { CURRENT_USER_ID } from '../../config'

export function getGridColumnsCurrentUser(users){
    const currentUser = users[CURRENT_USER_ID]
    return currentUser && currentUser.crm_module_preferences ? currentUser.crm_module_preferences:[]
}
