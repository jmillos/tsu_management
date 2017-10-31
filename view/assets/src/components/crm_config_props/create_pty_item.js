import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

// Material UI
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import ActionAddProperty from 'material-ui/svg-icons/content/add-circle'

// Own components
import FormPtyItem from './form_pty_item'

class CreatePtyItem extends Component {
    state = {
        openDialog: false
    }

    constructor(props){
        super(props)

        this.handleOpenDialog = this.handleOpenDialog.bind(this)
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

    handleOpenDialog(){
        this.props.onModeEdit(true)
        this.setState({openDialog: true});
    }

    handleCloseDialog(){
        this.props.onModeEdit(false)
        this.setState({openDialog: false});
    }

    onSubmit(values) {
        console.log('PtyItemForm', values);
        // this.props.createPost(values, () => {
        //     this.props.history.push("/");
        // });
    }

    render(){
        return (
            <div>
                <RaisedButton
                    className={this.props.className}
                    label="Crear propiedad"
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
                      title="Crear una nueva propiedad"
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

CreatePtyItem = reduxForm({form: 'PtyItemForm'})(CreatePtyItem)

export default CreatePtyItem
