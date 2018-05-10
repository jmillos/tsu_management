import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import { buildTitle } from '../../../lib/utils'

// Material UI
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

// Own Components
import QuickForm from './_quick_form'

class ModuleAdd extends Component {
    state = {
        openDialog: false
    }

    constructor(props){
        super(props)

        this.handleCloseDialog = this.handleCloseDialog.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleSubmit = this.props.handleSubmit(this.onSubmit)
        this.setActions()
    }

    setActions(){
        this.actions = [
            <FlatButton
                label="Cancelar"
                onClick={this.handleCloseDialog}
              />,
              <FlatButton
                label="Crear"
                primary={true}
                // keyboardFocused={true}
                type="submit"
                onClick={this.handleSubmit}
              />,
        ]
    }

    handleCloseDialog(){
        this.props.handleModeCreate(false)
    }

    onSubmit(data) {
        const title = buildTitle(data, this.getFieldQuickCreate())

        if(title){
            data.title = title
        }
        // console.log('PtyItemForm', values)
        
        data = { ...data, status: 'publish' }
        this.props.handleCreateRecord(this.props.moduleId, data, () => {
            this.handleCloseDialog()
        })
    }

    getFieldQuickCreate(){
        const {
            properties
        } = this.props

        return _.filter(properties, { quick_create: true })
    }

    render(){
        return (
            <Dialog
                  title="Crear un nuevo registro"
                  actions={this.actions}
                  modal={false}
                  titleStyle={{ paddingBottom: 0 }}
                  contentStyle={{ width: '60%' }}
                  open={this.props.modeCreate}
                  autoScrollBodyContent={true}
                  onRequestClose={this.handleCloseDialog}
                >
                <QuickForm
                    fields={this.getFieldQuickCreate()}
                    handleSubmit={this.handleSubmit} />
            </Dialog>
        )
    }
}

ModuleAdd = reduxForm({form: 'RecordForm'})(ModuleAdd);

export default ModuleAdd
