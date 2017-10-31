import React, {Component} from 'react'
import { Field } from 'redux-form'

import { Toggle } from 'redux-form-material-ui'

export default class BuildNumberField extends Component {
    render(){
        return (
            <Field
                name="is_multiple"
                component={Toggle}
                className="mt-2"
                label="Moneda: Activa esta opción si deseas que la propiedad tenga formato de moneda"
                labelPosition="right"
                defaultToggled={false}
            />
        )
    }
}
