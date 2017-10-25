import React, { Component } from 'react'

// Material UI
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class PtyItem extends Component {
    handleOpenDialog(){
        this.props.onEditGroupName(true)
        this.setState({openDialog: true});
    }

    handleCloseDialog(){
        this.props.onEditGroupName(false)
        this.setState({openDialog: false});
    }
    
    render(){
        return (
            <div>
                <Dialog
                      title="Cambiar nombre del grupo"
                      actions={actions}
                      modal={false}
                      contentStyle={{ width: 400 }}
                      open={this.state.openDialog}
                      onRequestClose={this.handleCloseDialog}
                    >
                </Dialog>
            </div>
        )
    }
}

export default PtyItem
