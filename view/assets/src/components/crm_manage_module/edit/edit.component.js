import styles from './edit.scss'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Material UI
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel'
import ContentSave from 'material-ui/svg-icons/content/save'
import Person from 'material-ui/svg-icons/social/person'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'

import { buildTitle, getGridColumnsCurrentUser } from '../../../lib/utils'

// Own components
import EditForm from './_edit_form'

export default class CrmManageModuleEdit extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    state = {
        open: true
    }

    /*static defaultProps = {
        moduleId: 12153
    }*/

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleSubmit = props.handleSubmit(this.onSubmit)
    }

    componentWillMount(){
        const {
            routeParams: { id }
        } = this.props

        this.props.fetchRecord(id, this.props.moduleId)
        this.props.fetchPropertyGroups()
        this.props.fetchProperties()
        this.props.fetchNotes(id)
        this.props.fetchActivities(id)
        console.log('this.props', id);
    }

    componentWillUnmount(){
        this.props.clearNotes()
    }

    handleClose(){
        // this.setState({ open: false })
        const {
            moduleId,
            moduleSlug
        } = this.props

        this.context.router.push(`${moduleId}-${moduleSlug}/records`)
    }

    onSubmit(data) {
        const {
            users,
            moduleId,
            properties
        } = this.props

        const columns = getGridColumnsCurrentUser(users, moduleId, properties)
        const title = buildTitle(data, columns)

        if(title){
            data.title = title
        }

        // console.log('PtyItemForm', values)
        data = { ...data, status: 'publish' }
        this.props.updateRecord(this.props.record.id, this.props.moduleId, data, () => {
            this.handleClose()
        })
    }

    render(){
        const {
            groups,
            properties,
            record,
            createNote,
            createActivity,
            notes,
            activities
        } = this.props

        return (
            <Drawer
                className={styles.crm_manage_module_edit}
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

                { record && <EditForm
                    style={{ backgroundColor: '#eee' }}
                    groups={groups}
                    fields={properties}
                    handleSubmit={this.handleSubmit}
                    handleClose={this.handleClose}
                    handleNoteAdd={createNote}
                    handleActivityAdd={createActivity}
                    record={record}
                    notes={notes}
                    activities={activities}
                />}
            </Drawer>
        )
    }
}
