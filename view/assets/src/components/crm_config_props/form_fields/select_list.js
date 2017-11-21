import React, {Component} from 'react'
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { SelectField } from 'redux-form-material-ui'

/**
 * `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 */
export default class SelectList extends Component {
    render() {
        const {
            name,
            label,
            isRequired,
            fieldTypeOpts
        } = this.props

        return (
            <Field
                name={name}
                component={SelectField}
                className="mui-text-input"
                floatingLabelText={label}
                multiple={fieldTypeOpts && fieldTypeOpts.is_multiple === true}
                validate={isRequired ? validators.required:null}
                fullWidth={true}
            >
                {
                    (() => {
                        if(fieldTypeOpts && fieldTypeOpts.options){
                            const options = fieldTypeOpts.options.split(',')

                            return options.map(opt => (
                                <MenuItem
                                    key={opt}
                                    value={opt}
                                    primaryText={opt}
                                />
                            ))
                        }
                    })()
                }
            </Field>
        );
    }
}
