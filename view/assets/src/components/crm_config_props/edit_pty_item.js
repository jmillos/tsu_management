import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

// Material UI
// import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import ActionAddProperty from 'material-ui/svg-icons/content/add-circle'

// Own components
import FormPtyItem from './form_pty_item'

class EditPtyItem extends Component {
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
                <FormPtyItem
                    ptyGroups={this.props.ptyGroups}
                    handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

EditPtyItem = reduxForm({form: 'PtyItemForm'})(EditPtyItem)

export default EditPtyItem
