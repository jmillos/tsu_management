import React, { Component } from 'react'

// Material UI
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import ActionAddProperty from 'material-ui/svg-icons/content/add-circle'

// Own components
import FormPtyItem from './form_pty_item'

class BtnCreatePtyItem extends Component {
    state = {
        openDialog: false
    }

    constructor(props){
        super(props)

        this.handleOpenDialog = this.handleOpenDialog.bind(this)
        this.handleCloseDialog = this.handleCloseDialog.bind(this)

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
                onClick={this.onUpdateItem}
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
                      onRequestClose={this.handleCloseDialog}
                    >
                    <FormPtyItem />
                </Dialog>
            </div>
        )
    }
}

export default BtnCreatePtyItem
