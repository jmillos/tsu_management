import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'

import CrmManageModuleEdit from './edit.component'
import * as actions from '../../../actions'

function mapStateToProps(state, ownProps){
    const record = state.records && state.records[ownProps.routeParams.id] ? state.records[ownProps.routeParams.id]:null
    const stateProps = { uiModule: state.uiModule, groups: state.ptyGroups, properties: state.properties, initialValues: record, record }

    if(ownProps && ownProps.routeParams){
        if(ownProps.routeParams.moduleId)
            stateProps.moduleId = ownProps.routeParams.moduleId

        if(ownProps.routeParams.moduleSlug)
            stateProps.moduleSlug = ownProps.routeParams.moduleSlug
    }

    return stateProps
}

const component = reduxForm({ form: 'RecordForm' })(CrmManageModuleEdit)

export default connect(mapStateToProps, actions)(component)

export { default as RichTextEditor } from '../../common/rich_editor/rich_editor'
