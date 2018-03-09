import React, { Component } from 'react'
import { stateToHTML } from 'draft-js-export-html'
import RaisedButton from 'material-ui/RaisedButton'
import { RichTextEditor } from './edit'

class NoteAdd extends Component {
    state = {
        editorHasText: false,
        contentState: null
    }

    constructor(props){
        super(props)

        this.onChangeEditor = this.onChangeEditor.bind(this)
        this.send = this.send.bind(this)
    }

    onChangeEditor(editorState){
        console.log('editorState.getCurrentContent', editorState.getCurrentContent());
        this.setState({ editorHasText: editorState.getCurrentContent().hasText(), contentState: editorState.getCurrentContent() })
    }

    send(){
        const {
            handleNoteAdd,
            record
        } = this.props

        const html = stateToHTML(this.state.contentState)

        console.log('html', html);
        handleNoteAdd({
            content: html,
            parent: record.id
        })
    }

    render(){

        return (
            <div className="pb-2">
                <RichTextEditor
                    callbackOnChange={this.onChangeEditor}
                />

                {
                    (() => {
                        if(this.state.editorHasText === true){
                            return (
                                <div>
                                    <RaisedButton
                                        label="Guardar nota"
                                        primary={true}
                                        className="ml-3 mr-3"
                                        onClick={this.send}
                                    />
                                    <RaisedButton label="Descartar" />
                                </div>
                            )
                        }
                    })()
                }
            </div>
        )
    }
}

export default NoteAdd
