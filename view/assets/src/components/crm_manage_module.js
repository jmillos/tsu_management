import _ from 'lodash'
import React, { Component } from 'react'
import { getGridColumnsCurrentUser } from '../lib/utils'

import HOCDrawer from './hoc_drawer_xl'
import Toolbar from './crm_manage_module/toolbar'
import AddRecord from './crm_manage_module/add'
import Customizer from './crm_manage_module/customizer'
import Grid from './crm_manage_module/grid'

export default class CrmManageModule extends Component {
    componentWillMount(){
        this.props.fetchRecords(this.props.moduleId)
        this.props.fetchPropertyGroups()
        this.props.fetchProperties()
    }

    handleKeyUp = event => {
        if(event.keyCode == 27 && this.props.uiModule.dialogOpen === false){
            this.handleClose();
        }
    }

    handleClose = () => this.props.router.push('/config')

    render(){
        const {
            moduleId,
            moduleSlug,
            uiModule: { modeCreate, modeCustomizer },
            properties,
            users,
            groups,
            records,
            setModeCreate,
            setModeCustomizer,
            createRecord,
            withoutDrawer
        } = this.props

        const columns = getGridColumnsCurrentUser(users, moduleId, properties)
        console.log('getGridColumnsCurrentUser', columns);
        const collRecords = _.map(records, i => i)

        const WrapContainer = withoutDrawer === true ? 'div':HOCDrawer
        const propsWrapContainer = {}
        if(withoutDrawer !== true){
            propsWrapContainer.handleClose = this.handleClose
            propsWrapContainer.handleKeyUp = this.handleKeyUp
        }

        return (
            <WrapContainer
                title="Modulo"
                {...propsWrapContainer}>
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
                        basePathRecord={`${moduleId}-${moduleSlug}/records/`}
                    />
                </div>
            </WrapContainer>
        )
    }
}
