import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { RichTextEditor } from './edit'

class NoteAdd extends Component {
    state = {
        editorHasText: false
    }

    constructor(props){
        super(props)

        this.onChangeEditor = this.onChangeEditor.bind(this)
    }

    onChangeEditor(editorState){
        // console.log('editorState.getCurrentContent', editorState.getCurrentContent().hasText());
        this.setState({ editorHasText: editorState.getCurrentContent().hasText() })
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
                                    <RaisedButton label="Guardar nota" primary={true} className="ml-3 mr-3" />
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
