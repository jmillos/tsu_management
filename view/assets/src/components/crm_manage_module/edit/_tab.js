import React, {Component} from 'react'
import { EditorState, ContentState } from 'draft-js'
import RaisedButton from 'material-ui/RaisedButton'
import { RichTextEditor } from './edit'

class Tab extends Component {
    labelSaveBtn = 'Guardar'
    labelCancelBtn = 'Descartar'

    state = {
        editorHasText: false,
        contentState: null,
        editorState: EditorState.createEmpty()
    }

    constructor(props) {
        super(props)

        this.onChangeEditor = this.onChangeEditor.bind(this)
        this.send = this.send.bind(this)
        this.cancel = this.cancel.bind(this)
    }

    onChangeEditor(editorState){
        // console.log('editorState.getCurrentContent', editorState.getCurrentContent());
        this.setState({ editorHasText: editorState.getCurrentContent().hasText(), contentState: editorState.getCurrentContent() })
    }

    cancel(){
      this.clearEditor()
    }

    clearEditor(){
        const editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''))
        this.setState({ editorState })
    }

    renderButtons(){
        if(this.state.editorHasText === true){
            return (
                <div>
                    <RaisedButton
                        label={this.labelSaveBtn}
                        primary={true}
                        className="ml-3 mr-3"
                        onClick={this.send}
                    />
                    <RaisedButton
                      label={this.labelCancelBtn}
                      onClick={this.cancel}
                    />
                </div>
            )
        }
    }
}

export default Tab
