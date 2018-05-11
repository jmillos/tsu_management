import React, { Component } from 'react'
import { reduxForm, Field, FormSection, formValueSelector } from 'redux-form'

// Material UI

// Own components
import { formFields } from '../../crm_config_props/form_fields/index'

class QuickForm extends Component {
    constructor(props){
        super(props)

    }

    getFormField(key){
        key = key
        return formFields.find(i => i.type === key)
    }

    getFormFieldComponent(fieldType){
        const formField = this.getFormField(fieldType)

        if(formField && formField.component){
            return formField.component
        }

        return null
    }

    render(){
        const {
            fields,
            handleSubmit
        } = this.props

        return (
            <form onSubmit={handleSubmit}>
                {fields.map(field => {
                    const FieldComponent = this.getFormFieldComponent(field.field_type)

                    return <FieldComponent
                                key={field.id}
                                name={field.slug}
                                label={field.title}
                                isRequired={field.required}
                                fieldTypeOpts={field.field_type_opts}
                            />
                })}
            </form>
        )
    }
}

QuickForm = reduxForm({form: 'RecordForm'})(QuickForm);

export default QuickForm
