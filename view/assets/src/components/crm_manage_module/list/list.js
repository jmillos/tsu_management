import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventListener from 'react-event-listener'

import CrmManageModule from './list.component'
import * as actions from '../../../actions'

function mapStateToProps({ uiModule, properties, users, ptyGroups, records }, ownProps){
    const state = { uiModule, properties, users, groups: ptyGroups, records }

    if(ownProps && ownProps.routeParams){
        if(ownProps.routeParams.moduleId)
            state.moduleId = ownProps.routeParams.moduleId

        if(ownProps.routeParams.moduleSlug)
            state.moduleSlug = ownProps.routeParams.moduleSlug
    }

    return state
}

export default connect(mapStateToProps, actions)(CrmManageModule)
