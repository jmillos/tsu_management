import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Material UI
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import Person from 'material-ui/svg-icons/social/person'

// Own components
import EditForm from './crm_manage_module/edit_form'

export default class CrmManageModuleEdit extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    state = {
        open: true
    }

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleSubmit = props.handleSubmit(this.onSubmit)
    }

    componentWillMount(){
        const parentId = 12153
        this.props.fetchRecord(this.props.routeParams.id, parentId)
        this.props.fetchPropertyGroups()
        this.props.fetchProperties()
        console.log('this.props', this.props.routeParams.id);
    }

    handleClose(){
        // this.setState({ open: false })
        this.context.router.push('/config')
    }

    onSubmit(data) {
        // console.log('PtyItemForm', values)
        data = { ...data, status: 'publish' }
        // this.props.handleCreateRecord(this.props.moduleId, data, () => {
            // this.handleCloseDialog()
        // })
    }

    render(){
        const {
            groups,
            properties,
            record
        } = this.props

        return (
            <Drawer
                width={window.innerWidth - 36}
                docked={false}
                openSecondary={true}
                containerClassName="muiDrawerContainer"
                overlayClassName="muiDrawerOverlay"
                open={this.state.open}
                onRequestChange={(open, reason) => {
                    console.log('onRequestChange', open, reason)
                }}>
                <AppBar
                    title={record ? `${record.nombre} ${record.apellidos}`:null}
                    className="muiAppBar"
                    iconElementLeft={<IconButton><Person /></IconButton>}
                    iconElementRight={<IconButton><NavigationClose /></IconButton>}
                    onRightIconButtonTouchTap={this.handleClose} />

                <EditForm
                    style={{ backgroundColor: '#eee' }}
                    groups={groups}
                    fields={properties}
                />
            </Drawer>
        )
    }
}
