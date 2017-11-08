import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import CrmConfigPropsEdit from '../components/crm_config_props_edit'
import * as actions from '../actions'

function mapStateToProps({ ptyGroups, properties }, ownProps){
    const property = properties[ownProps.routeParams.id]
    return { groups: ptyGroups, initialValues: property, property }
}

const component = reduxForm({ form: 'PtyItemForm' })(CrmConfigPropsEdit)

export default connect(mapStateToProps, actions)(component)
