import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

// Material UI
import Dialog from 'material-ui/Dialog'
// import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import ActionAddProperty from 'material-ui/svg-icons/content/add-circle'

// Own components
import CreatePtyItem from './create_pty_item'
import FormPtyItem from './form_pty_item'

class EditPtyItem extends CreatePtyItem {
    constructor(props){
        super(props)
    }

    // onSubmit(data) {
    //     // console.log('PtyItemForm', values)
    //     data = { ...data, status: 'publish' }
    //     this.props.handleCreateProperty(data, () => {
    //         this.handleCloseDialog()
    //     })
    // }

    render(){
        return (
            <div>
                <RaisedButton
                    className={this.props.className}
                    label="Editar propiedad"
                    labelStyle={{
                        fontSize: '11px',
                        paddingLeft: '4px',
                        paddingRight: '8px'
                    }}
                    primary={true}
                    icon={<ActionAddProperty style={{ height: 18, width: 18 }} />}
                    style={{ lineHeight: '36px', height: 36 }}
                    onClick={this.handleOpenDialog}
                />
                <Dialog
                      title="Editar propiedad"
                      actions={this.actions}
                      modal={false}
                      titleStyle={{ paddingBottom: 0 }}
                      contentStyle={{ width: '60%' }}
                      open={this.state.openDialog}
                      autoScrollBodyContent={true}
                      onRequestClose={this.handleCloseDialog}
                    >
                    <FormPtyItem
                        ptyGroups={this.props.ptyGroups}
                        handleSubmit={this.handleSubmit} />
                </Dialog>
            </div>
        )
    }
}

EditPtyItem = reduxForm({form: 'PtyItemForm'})(EditPtyItem)

export default EditPtyItem
