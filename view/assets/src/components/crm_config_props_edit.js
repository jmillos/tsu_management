import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router'

// Material UI
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import ActionAddProperty from 'material-ui/svg-icons/content/add-circle'

// Own components
import FormPtyItem from './crm_config_props/form_pty_item'

class CrmConfigPropsEdit extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props){
        super(props)

        this.propertyId = props.routeParams.id

        this.onSubmit = this.onSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleSubmit = props.handleSubmit(this.onSubmit)

        this.setActionButtons()
    }

    componentWillMount(){
        console.log('this.props.match.params', this.props.routeParams);
        // this.props.initialize()
    }

    setActionButtons(){
        this.actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                // containerElement={<Link to="/config" />}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSubmit}
            />,
        ]
    }

    handleClose(){
        // this.setState({open: false});
        this.context.router.push('/config')
    };

    onSubmit(data){
        data = { ...data }
        this.props.updatePropertyGroup(data, this.propertyId)
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
            <Dialog
                title="Editar Propiedad"
                actions={this.actions}
                modal={false}
                open={true}
                onRequestClose={this.handleClose}
            >
                <FormPtyItem
                    ptyGroups={this.props.ptyGroups}
                    handleSubmit={this.handleSubmit} />
            </Dialog>
        )
    }
}

export default CrmConfigPropsEdit
