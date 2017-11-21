import React, {Component} from 'react'
import { Field } from 'redux-form'

import { DatePicker as MUIDatePicker } from 'redux-form-material-ui'
import * as validators from '../../../validators'
import { dateTimeFormat } from '../../../lib/utils'

export default class DatePicker extends Component {
    render(){
        const {
            name,
            label,
            isRequired,
            fieldTypeOpts
        } = this.props

        let validate = []

        if(isRequired){
            validate.push(validators.required)
        }

        return (
            <Field
                name={name}
                component={MUIDatePicker}
                className="mui-text-input"
                floatingLabelText={label}
                // hintText={placeholder}
                cancelLabel='Cancelar'
                container="inline"
                mode="landscape"
                locale="es-CO"
                DateTimeFormat={dateTimeFormat()}
                validate={validate}
                autoOk={true}
                fullWidth={true}
            />
        )
    }
}
