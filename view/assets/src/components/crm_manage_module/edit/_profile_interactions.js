import React, {Component} from 'react'

// Material UI
import {Tabs, Tab} from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'
import NoteAddIcon from 'material-ui/svg-icons/action/note-add'
import Email from 'material-ui/svg-icons/communication/email'
import Activity from 'material-ui/svg-icons/maps/local-activity'
import Book from 'material-ui/svg-icons/action/book'
import EventNote from 'material-ui/svg-icons/notification/event-note'

// Own components
import NoteAdd from './_note_add'

class ProfileInteractions extends Component {
    render() {
        const {
            handleCreateNote
        } = this.props
        
        return (
            <Tabs>
                <Tab icon={<NoteAddIcon />} label="Nueva nota">
                    <Paper zDepth={1}>
                        <NoteAdd handleCreateNote={handleCreateNote} />
                    </Paper>
                </Tab>
                <Tab icon={<Email />} label="E-mail"/>
                <Tab icon={<Activity />} label="Registrar actividad"/>
                <Tab icon={<Book />} label="Crear tarea"/>
                <Tab icon={<EventNote />} label="Programar"/>
            </Tabs>
        )
    }
}

export default ProfileInteractions;
