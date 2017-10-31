import React, {Component} from 'react'
import { Field } from 'redux-form'

import { TextField, Toggle } from 'redux-form-material-ui'

import * as validators from './../../../../validators'

export default class BuildSelectList extends Component {
    render(){
        return (
            <div>
                <Field
                    name="options"
                    component={TextField}
                    className="mui-text-input"
                    floatingLabelText="Coloca tus opciones separados por coma (,)"
                    hintText="Gato,Perro,Pez"
                    multiLine={true}
                    rows={1}
                    validate={validators.required}
                    fullWidth={true}
                />
                <Field
                    name="is_multiple"
                    component={Toggle}
                    className="mt-2"
                    label="¿Es multiple?"
                    labelPosition="right"
                    defaultToggled={false}
                />
            </div>
        )
    }
}
