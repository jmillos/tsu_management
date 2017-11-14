import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'

import CrmManageModuleEdit from '../components/crm_manage_module_edit'
import * as actions from '../actions'

function mapStateToProps(state, ownProps){
    const record = state.records && state.records[ownProps.routeParams.id] ? state.records[ownProps.routeParams.id]:null
    return { groups: state.ptyGroups, properties: state.properties, initialValues: record, record }
}

const component = reduxForm({ form: 'RecordForm' })(CrmManageModuleEdit)

export default connect(mapStateToProps, actions)(component)
