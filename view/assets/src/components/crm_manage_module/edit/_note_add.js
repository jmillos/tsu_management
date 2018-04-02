import React, { Component } from 'react'
import { stateToHTML } from 'draft-js-export-html'
import { RichTextEditor } from './edit'

import Tab from './_tab'

class NoteAdd extends Tab {
    labelSaveBtn = 'Guardar nota'
    placeholder = 'Escribe algo brillante...'

    send(){
        const {
            handleNoteAdd,
            record
        } = this.props

        const html = stateToHTML(this.state.contentState)

        handleNoteAdd({
            content: html,
            parent: record.id,
            status: 'publish'
        }, () => {
            this.clearEditor()
        })
    }

    render(){
        return (
            <div className="pb-2">
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

export default NoteAdd
