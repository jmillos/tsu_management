import _ from 'lodash'
import React, { Component } from 'react'

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
            uiModule: { modeCreate },
            properties,
            records,
            setModeCreate,
            createRecord
        } = this.props

        const collRecords = _.map(records, i => i)

        return(
            <div className="crm-manage-module">
                <Toolbar
                    handleModeCreate={setModeCreate} />

                <AddRecord
                    moduleId={moduleId}
                    properties={properties}
                    modeCreate={modeCreate}
                    handleModeCreate={setModeCreate}
                    handleCreateRecord={createRecord} />

                <Customizer
                    moduleId={moduleId}
                    modeCreate={modeCreate}
                    handleModeCreate={setModeCreate}
                    handleCreateRecord={createRecord} />

                <Grid
                    records={collRecords}
                    size={collRecords.length}
                />
            </div>
        )
    }
}
