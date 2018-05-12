import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'

import CrmConfigPropsEdit from '../components/crm_config_props_edit'
import * as actions from '../actions'


const selector = formValueSelector('PtyItemForm')
function mapStateToProps(state, ownProps){
    const property = state.properties[ownProps.routeParams.id]
    return { 
    	groups: state.ptyGroups, 
    	initialValues: property, 
    	property, 
    	fieldType: selector(state, 'field_type'), 
    	titleField: selector(state, 'title'),
    	slugField: selector(state, 'slug')
    }
}

const component = reduxForm({ form: 'PtyItemForm' })(CrmConfigPropsEdit)

export default connect(mapStateToProps, actions)(component)
