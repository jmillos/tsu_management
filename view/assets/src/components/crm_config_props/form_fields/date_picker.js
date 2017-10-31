import React, {Component} from 'react'
import { Field } from 'redux-form'

import { MUIDatePicker } from 'redux-form-material-ui'

export default class DatePicker extends Component {
    render(){
        return (
            <Field
                name={this.props.name}
                component={MUIDatePicker}
                className="mui-text-input"
                floatingLabelText={this.props.label}
                hintText={this.props.placeholder}
                container="inline"
                mode="landscape"
                fullWidth={true}
            />
        )
    }
}
