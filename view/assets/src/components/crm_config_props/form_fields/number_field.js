import React, {Component} from 'react'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import * as validators from '../../../validators'

export default class NumberField extends Component {
    /*static defaultProps = {
        value: 0,
        precision: 2,
        separator: '.',
        delimiter: ',',
        unit: '',
    }*/

    constructor(props){
        super(props)

        this.formatRawValue = this.formatRawValue.bind(this)
    }

    formatRawValue(rawValue, name) {
        if (Number.isNaN(parseFloat(rawValue))) {
            return 0;
        }

        return new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(rawValue)
    }

    parseRawValue(displayedValue) {
        const value = displayedValue.replace(/[^0-9]/g, '');

        return parseFloat(value);
    }

    render(){
        const {
            name,
            label,
            isRequired,
            fieldTypeOpts
        } = this.props

        let validate = [validators.number]
        if(isRequired){
            validate.push(validators.required)
        }

        return (
            <Field
                name={name}
                component={TextField}
                className="mui-text-input"
                floatingLabelText={label}
                // hintText={placeholder}
                validate={validate}
                format={fieldTypeOpts.is_currency ? this.formatRawValue:null}
                normalize={fieldTypeOpts.is_currency ? this.parseRawValue:null}
                fullWidth={true}
            />
        )
    }
}
