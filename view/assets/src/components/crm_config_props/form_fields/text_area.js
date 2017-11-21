import React, {Component} from 'react'
import { Field } from 'redux-form'

import { TextField } from 'redux-form-material-ui'

import * as validators from '../../../validators'

export default class TextArea extends Component {
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
                component={TextField}
                className="mui-text-input"
                floatingLabelText={label}
                // hintText={placeholder}
                multiLine={true}
                rows={3}
                fullWidth={true}
                validate={isRequired ? validators.required:null}
            />
        )
    }
}
