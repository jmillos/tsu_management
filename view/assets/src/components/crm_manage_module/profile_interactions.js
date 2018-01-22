import React, {Component} from 'react'
import {Editor, EditorState} from 'draft-js'
import 'draft-js/dist/Draft.css'

// Material UI
import {Tabs, Tab} from 'material-ui/Tabs'
import NoteAdd from 'material-ui/svg-icons/action/note-add'
import Email from 'material-ui/svg-icons/communication/email'
import Activity from 'material-ui/svg-icons/maps/local-activity'
import Book from 'material-ui/svg-icons/action/book'
import EventNote from 'material-ui/svg-icons/notification/event-note'

class ProfileInteractions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
        this.onChange = (editorState) => this.setState({editorState});
    }

    render() {
        return (
            <Tabs>
                <Tab icon={<NoteAdd />} label="Nueva nota">
                    <Editor editorState={this.state.editorState} onChange={this.onChange} />
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
