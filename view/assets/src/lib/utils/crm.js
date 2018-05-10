import _ from 'lodash'
import { CURRENT_USER_ID } from '../../config'

export function getGridColumnsCurrentUser(users, moduleId, properties){
    const currentUser = users[CURRENT_USER_ID]
    const modulePreferences = currentUser && currentUser.crm_module_preferences ? currentUser.crm_module_preferences:[]

    const gridColumns = modulePreferences[moduleId] && modulePreferences[moduleId].gridCols ? modulePreferences[moduleId].gridCols:[]

    let columns = []
    if(
        Array.isArray(gridColumns) && gridColumns.length > 0
            && _.size(properties) > 0
    ){
        columns = _.map(gridColumns, id => {
            return _.find(properties, { id })
        })

        return columns
    }

}

export function buildTitle(record, columns){
    const fields = getColumnsInTitle(columns)
    const words = _.map(fields, f => record[f.slug])

    return words ? _.join(words, ' '):null
}

export function getColumnsInTitle(columns){
    return _.filter(columns, { in_title: true })
}
