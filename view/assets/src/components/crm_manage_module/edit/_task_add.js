import styles from './edit.scss'

import React, { Component } from 'react'
import { stateToHTML } from 'draft-js-export-html'
import AlertContainer from 'react-alert'

import { RichTextEditor } from './edit'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'

import { CURRENT_USER_ID, alertOptions } from '../../../config'
import Tab from './_tab'

class TaskAdd extends Tab {
    labelSaveBtn = 'Guardar tarea'
    placeholder = 'Notas...'

    constructor(props){
        super(props)

        this.state.title = ''
        this.state.type = 'todo'
        this.state.assignedTo = parseInt(CURRENT_USER_ID) || null
        this.state.date = new Date()
        this.state.time = new Date()
    }

    validBeforeSend(){
        const {
            title,
            assignedTo
        } = this.state

        if( this.hasTitle() === false ){
            this.msg.error('Las tareas deben tener un asunto!')
            return false
        }

        if(typeof assignedTo !== 'number'){
            this.msg.error('Las tareas deben tener un usuario asignado!')
            return false
        }

        return true
    }

    hasTitle(){
        const {
            title
        } = this.state

        return typeof title === 'string' && title.length > 0
    }

    onChangeEditor(editorState){
        // console.log('editorState.getCurrentContent', editorState.getCurrentContent());
        this.setState({
            editorHasText: this.hasTitle() || editorState.getCurrentContent().hasText(),
            contentState: editorState.getCurrentContent(),
        })
    }

    cancel(){
        this.clear()
    }

    clear(){
        this.setState({ title: '' })
        this.clearEditor()
    }

    send(){
        if( this.validBeforeSend() === false ){
            return false
        }

        const {
            handleTaskAdd,
            record
        } = this.props

        const html = stateToHTML(this.state.contentState)

        const data = {
            title: this.state.title,
            content: html,
            parent: record.id,
            field_type: this.state.type,
            assigned_to: this.state.assignedTo,
            status: 'publish',
            date: this.formatDateTime()
        }

        handleTaskAdd(data, () => {
            this.clear()
        })
    }

    render(){
        const {
            users
        } = this.props

        return (
            <div className={`${styles.task} pl-2 pr-2 pb-2`}>
                <AlertContainer ref={a => this.msg = a} {...alertOptions} />

                <div className="row">
                    <div className="col-8">
                        <TextField
                            className="mui-input-wrap mui-text-input"
                            hintText="Ingresa tu tarea"
                            floatingLabelText="Asunto tarea"
                            value={this.state.title}
                            onChange={(event, title) => {
                                this.setState({ title }, () => {
                                    this.setState({ editorHasText: this.hasTitle() })
                                })
                            }}
                        />
                    </div>

                    <div className={`${styles.date} col-2`}>
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

                    <div className={`${styles.time} col-2`}>
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

                <div className={`${styles.footer} row ml-2 mr-2 mb-2`}>
                    <div className="col-3">
                        <SelectField
                            className={`${styles.mui_field}`}
                            floatingLabelText="Tipo"
                            value={this.state.type}
                            onChange={(event, index, value) => this.setState({ type: value })}
                        >
                            <MenuItem value="todo" primaryText="Por hacer" />
                            <MenuItem value="call" primaryText="Llamada" />
                            <MenuItem value="email" primaryText="Correo" />
                        </SelectField>
                    </div>

                    <div className="col-4">
                        <SelectField
                            className={`${styles.mui_field}`}
                            floatingLabelText="Asignado a"
                            value={this.state.assignedTo}
                            onChange={(event, index, value) => this.setState({ assignedTo: value })}
                        >
                        {
                            _.map(users, item => <MenuItem key={item.id} value={item.id} primaryText={item.name} />)
                        }
                        </SelectField>
                    </div>
                </div>

                { this.renderButtons() }
            </div>
        )
    }
}

export default TaskAdd
