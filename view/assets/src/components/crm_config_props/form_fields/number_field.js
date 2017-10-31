import React, {Component} from 'react'
import { Field } from 'redux-form'

import { TextField } from 'redux-form-material-ui'

export default class NumberField extends Component {
    render(){
        return (
            <Field
                name={this.props.name}
                component={TextField}
                className="mui-text-input"
                floatingLabelText={this.props.label}
                hintText={this.props.placeholder}
                fullWidth={true}
            />
        )
    }
}