import React, { Component } from 'react'
import { EditorState, ContentState } from 'draft-js'
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
        this.cancel = this.cancel.bind(this)
    }

    onChangeEditor(editorState){
        console.log('editorState.getCurrentContent', editorState.getCurrentContent());
        this.setState({ editorState, editorHasText: editorState.getCurrentContent().hasText(), contentState: editorState.getCurrentContent() })
    }

    cancel(){
      const editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''));
      this.setState({ editorState });
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
            parent: record.id,
            status: 'publish'
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
                                    <RaisedButton
                                      label="Descartar"
                                      onClick={this.cancel}
                                    />
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
