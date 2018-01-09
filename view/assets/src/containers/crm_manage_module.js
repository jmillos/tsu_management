import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventListener from 'react-event-listener'

import CrmManageModule from '../components/crm_manage_module'
import * as actions from '../actions'

function mapStateToProps({ uiModule, properties, users, ptyGroups, records }, ownProps){
    const moduleId = ownProps.routeParams
    const state = { uiModule, properties, users, groups: ptyGroups, records }

    if(ownProps && ownProps.routeParams && ownProps.routeParams.moduleId)
        state.moduleId = ownProps.routeParams.moduleId

    return state
}

export default connect(mapStateToProps, actions)(CrmManageModule)
