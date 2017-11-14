import _ from 'lodash'
import React, { Component } from 'react'
import { reduxForm, Field, FormSection, formValueSelector } from 'redux-form'

// Material UI
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Folder from 'material-ui/svg-icons/file/folder'

// Own components
import { formFields } from '../crm_config_props/form_fields/index'

class EditForm extends Component {
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
            groups,
            handleSubmit
        } = this.props

        return (
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row">
                    <div className="left-column">
                        {_.map(groups, group => {
                            const fieldsGroup = _.filter(fields, { parent: group.id })
                            return (
                                <Card>
                                   <CardHeader
                                     title={group.title}
                                     subtitle="Subtitle"
                                     avatar={<Avatar icon={<Folder />} />}
                                   />

                                    <CardText>
                                        {_.map(fieldsGroup, field => {
                                            const FieldComponent = this.getFormFieldComponent(field.field_type)

                                            return <FieldComponent
                                                        key={field.id}
                                                        name={field.slug}
                                                        label={field.title}
                                                        isRequired={field.required}
                                                    />
                                        })}
                                    </CardText>
                               </Card>
                           )
                       })}
                    </div>
                    <div className="right-column col-md-8">
                        Timeline
                    </div>
                </div>
            </form>
        )
    }
}

export default EditForm
