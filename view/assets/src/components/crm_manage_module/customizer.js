import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

// Material UI
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class Customizer extends Component {
    state = {
        openDialog: false
    }

    constructor(props){
        super(props)

        this.handleCloseDialog = this.handleCloseDialog.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        // this.handleSubmit = this.props.handleSubmit(this.onSubmit)
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
        // this.props.handleModeCreate(false)
    }

    onSubmit(data) {
        // console.log('PtyItemForm', values)
        data = { ...data, status: 'publish' }
        this.props.handleCreateRecord(this.props.moduleId, data, () => {
            this.handleCloseDialog()
        })
    }

    render(){
        const {

        } = this.props

        return (
            <div>
                <Dialog
                      title="Personalizar columnas"
                      actions={this.actions}
                      modal={false}
                      titleStyle={{ paddingBottom: 0 }}
                      contentStyle={{ width: '60%' }}
                      open={this.props.modeCreate}
                      autoScrollBodyContent={true}
                      onRequestClose={this.handleCloseDialog}
                    >

                </Dialog>
            </div>
        )
    }
}

Customizer = reduxForm({form: 'RecordForm'})(Customizer);

export default Customizer
