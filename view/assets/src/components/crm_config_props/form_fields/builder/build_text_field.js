import React, {Component} from 'react'
import { Field } from 'redux-form'

import MenuItem from 'material-ui/MenuItem'
import { TextField, SelectField } from 'redux-form-material-ui'

export default class BuildTextField extends Component {
    render(){
        return (
            <Field
                name="options"
                component={SelectField}
                className="mui-text-input"
                floatingLabelText="Tipo"
                hintText="Seleccione un tipo de entrada"
                multiLine={true}
                rows={2}
                fullWidth={true}
            >
                <MenuItem value="email" primaryText="Email" />
            </Field>
        )
    }
}
