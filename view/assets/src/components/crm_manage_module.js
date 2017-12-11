import _ from 'lodash'
import React, { Component } from 'react'
import { getGridColumnsCurrentUser } from '../lib/utils'

import Toolbar from './crm_manage_module/toolbar'
import AddRecord from './crm_manage_module/add'
import Customizer from './crm_manage_module/customizer'
import Grid from './crm_manage_module/grid'

export default class CrmManageModule extends Component {
    componentWillMount(){
        this.props.fetchRecords(this.props.moduleId)
    }

    render(){
        const {
            moduleId,
            uiModule: { modeCreate, modeCustomizer },
            properties,
            users,
            groups,
            records,
            setModeCreate,
            setModeCustomizer,
            createRecord
        } = this.props

        const columns = getGridColumnsCurrentUser(users, moduleId, properties)
        console.log('getGridColumnsCurrentUser', columns);
        const collRecords = _.map(records, i => i)

        return(
            <div className="crm-manage-module">
                <Toolbar
                    handleModeCreate={setModeCreate}
                    handleDialogOpen={setModeCustomizer} />

                <AddRecord
                    moduleId={moduleId}
                    properties={properties}
                    modeCreate={modeCreate}
                    handleModeCreate={setModeCreate}
                    handleCreateRecord={createRecord} />

                <Customizer
                    moduleId={moduleId}
                    dialogOpen={modeCustomizer}
                    groups={groups}
                    fields={properties}
                    columns={columns}
                    handleDialogOpen={setModeCustomizer}
                    handleCreateRecord={createRecord}
                    handleUpdateUser={this.props.updateUser} />

                <Grid
                    records={collRecords}
                    size={collRecords.length}
                    columns={columns}
                />
            </div>
        )
    }
}
