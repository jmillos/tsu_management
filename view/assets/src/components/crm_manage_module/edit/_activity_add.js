import styles from './edit.scss'

import _ from 'lodash'
import React, { Component } from 'react'
import moment from 'moment'
import { stateToHTML } from 'draft-js-export-html'
import { RichTextEditor } from './edit'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'

import { resultsCall } from '../../../config'
import Tab from './_tab'

class ActivityAdd extends Tab {
    labelSaveBtn = 'Registrar actividad'
    placeholder = 'Descripción...'

    constructor(props){
        super(props)

        this.state.typeActivity = 'call'
        this.state.resultActivity = null
        this.state.date = new Date()
        this.state.time = new Date()

        this.handleChangeType = this.handleChangeType.bind(this)
    }

    handleChangeType(event, index, value){
        switch(value){
            case 'call':
                this.placeholder = 'Describe la llamada...'
                break;

            case 'mail':
                this.placeholder = 'Describe el correo...'
                break;

            case 'meeting':
                this.placeholder = 'Describe la reunión...'
                break;
        }

        this.setState({ typeActivity: value })
    }

    valid(){
        return this.state.typeActivity;
    }

    send(){
        const {
            handleActivityAdd,
            record
        } = this.props

        const html = stateToHTML(this.state.contentState)
        const date = moment(this.state.date).format('YYYY-MM-DD')
        const time = moment(this.state.time).format('HH:mm:00')

        console.log('time', time);

        const data = {
            content: html,
            parent: record.id,
            field_type: this.state.typeActivity,
            status: 'publish',
            date: `${date} ${time}`
        }

        if(this.state.resultActivity)
            data.field_result = this.state.resultActivity

        handleActivityAdd(data, () => {
            this.clearEditor()
        })
    }

    render(){
        const {
            typeActivity
        } = this.state

        return (
            <div className={`${styles.activity} pb-2`}>
                <div className="d-flex flex-wrap">
                    <div className="mr-auto">
                        <SelectField
                            className="pl-2"
                            floatingLabelText="Tipo de actividad"
                            value={this.state.typeActivity}
                            onChange={this.handleChangeType}
                        >
                            <MenuItem value="call" primaryText="Registrar una llamada" />
                            <MenuItem value="mail" primaryText="Registrar un correo" />
                            <MenuItem value="meeting" primaryText="Registrar una reunión" />
                        </SelectField>

                        {
                            (() => {
                                switch (typeActivity) {
                                    case 'call':
                                        return (
                                            <SelectField
                                                className="pl-4"
                                                floatingLabelText="Seleccionar un resultado"
                                                value={this.state.resultActivity}
                                                onChange={(event, index, value) => this.setState({ resultActivity: value })}
                                            >
                                                {
                                                    _.map(resultsCall, item => <MenuItem key={item.key} value={item.key} primaryText={item.label} />)
                                                }
                                            </SelectField>
                                        )

                                    default:
                                        return null
                                }
                            })()
                        }
                    </div>

                    <div className={styles.date}>
                        <DatePicker
                            className={`${styles.mui_field} mui-text-input`}
                            cancelLabel="Cancelar"
                            floatingLabelText="Día"
                            hintText="Día"
                            container="inline"
                            autoOk={true}
                            value={this.state.date}
                            onChange={(event, date) => {
                                this.setState({ date })
                            }}
                        />
                    </div>

                    <div className={`${styles.time} ml-2`}>
                        <TimePicker
                            className={`${styles.mui_field} mui-text-input`}
                            cancelLabel="Cancelar"
                            format="24hr"
                            floatingLabelText="Hora"
                            hintText="Hora"
                            minutesStep={5}
                            autoOk={true}
                            value={this.state.time}
                            onChange={(event, time) => {
                                this.setState({ time })
                            }}
                        />
                    </div>
                </div>

                <RichTextEditor
                    callbackOnChange={this.onChangeEditor}
                    editorState={this.state.editorState}
                    placeholder={this.placeholder}
                />

                { this.renderButtons() }
            </div>
        )
    }
}

export default ActivityAdd
