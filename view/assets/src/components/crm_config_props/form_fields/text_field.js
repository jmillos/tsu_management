import React, {Component} from 'react'
import { Field } from 'redux-form'

import {
    TextField as MUITextField
} from 'redux-form-material-ui'

import * as validators from '../../../validators'

export default class TextField extends Component {
    render(){
        const {
            name,
            label,
            // placeholder,
            isRequired
        } = this.props

        return (
            <Field
                name={name}
                component={MUITextField}
                className="mui-text-input"
                floatingLabelText={label}
                // hintText={placeholder}
                fullWidth={true}
                validate={isRequired ? validators.required:null}
            />
        )
    }
}
