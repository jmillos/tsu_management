import React, {Component} from 'react'
import { Field } from 'redux-form'

import { MUIToggle } from 'redux-form-material-ui'

export default class Toggle extends Component {
    render(){
        return (
            <Field
                name={this.props.name}
                component={MUIToggle}
                label={this.props.label}
                labelPosition="right"
            />
        )
    }
}
