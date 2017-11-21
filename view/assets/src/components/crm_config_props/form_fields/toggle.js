import React, {Component} from 'react'
import { Field } from 'redux-form'

import { Toggle as MUIToggle } from 'redux-form-material-ui'

export default class Toggle extends Component {
    render(){
        const {
            name,
            label,
            isRequired,
            fieldTypeOpts
        } = this.props

        return (
            <Field
                className="mt-3"
                name={name}
                component={MUIToggle}
                label={label}
                labelPosition="right"
            />
        )
    }
}
