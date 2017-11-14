import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventListener from 'react-event-listener'

import CrmManageModule from '../components/crm_manage_module'
import * as actions from '../actions'

function mapStateToProps({ uiModule, properties, records }){
    return { uiModule, properties, records }
}

export default connect(mapStateToProps, actions)(CrmManageModule)
