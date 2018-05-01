import styles from './edit.scss'

import _ from 'lodash'
import React, { Component } from 'react'
import { reduxForm, Field, FormSection, formValueSelector } from 'redux-form'

// Material UI
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Folder from 'material-ui/svg-icons/file/folder'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel'
import ContentSave from 'material-ui/svg-icons/content/save'

// Own components
import { formFields } from '../../crm_config_props/form_fields/index'
import ProfileInteractions from './_profile_interactions'
import Timeline from '../../common/timeline/timeline'

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
            users,
            fields,
            groups,
            handleClose,
            handleSubmit,
            handleTaskAdd,
            handleNoteAdd,
            handleActivityAdd,
            record,
            notes,
            activities
        } = this.props

        return (
            <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between">
                    <div className="left-column">
                        {_.map(groups, group => {
                            const fieldsGroup = _.filter(fields, { parent: group.id })
                            return (
                                <Card key={group.id}>
                                   <CardHeader
                                     title={group.title}
                                     subtitle={record.title}
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
                                                        fieldTypeOpts={field.field_type_opts}
                                                    />
                                        })}
                                    </CardText>
                               </Card>
                           )
                       })}
                    </div>
                    <div className={styles.right_column}>
                        <ProfileInteractions
                            handleNoteAdd={handleNoteAdd}
                            handleActivityAdd={handleActivityAdd}
                            handleTaskAdd={handleTaskAdd}
                            users={users}
                            record={record}
                        />

                        <Timeline
                          record={record}
                          notes={notes}
                          activities={activities}
                        />
                    </div>
                </div>

                <Paper className={styles.footer_actions} zDepth={1}>
                    <BottomNavigation>
                      <BottomNavigationItem
                        label="Cancelar"
                        icon={<NavigationCancel></NavigationCancel>}
                        onClick={handleClose}
                      />
                      <BottomNavigationItem
                        label="Guardar"
                        icon={<ContentSave></ContentSave>}
                        onClick={handleSubmit}
                      />
                    </BottomNavigation>
                  </Paper>
            </form>
        )
    }
}

export default EditForm
