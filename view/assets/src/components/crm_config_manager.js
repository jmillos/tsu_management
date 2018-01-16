import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, hashHistory } from 'react-router'
import EventListener from 'react-event-listener'

// Material UI
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import RaisedButton from 'material-ui/RaisedButton';
import ActionExtension from 'material-ui/svg-icons/action/extension'

export default class CrmConfigManager extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {open: false};

        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
    }

    componentWillMount(){
        // document.addEventListener("keyup", this.handleKeyUp, false);
    }

    componentWillUnmount(){
        // document.removeEventListener("keyup", this.handleKeyUp, false);
    }

    handleKeyUp(event){
        if(event.keyCode == 27){
            this.handleClose();
        }
    }

    handleOpen(){
        document.body.classList.add('ui-full-screen-background')
        this.setState({open: true})

        // console.log('this.context.router', this.context.router);
        // this.context.router.location.pathname = this.props.linkTo
        // document.location.hash = this.props.linkTo
        // hashHistory.replace(this.context.router.location)
    }

    handleClose(){
        document.body.classList.remove('ui-full-screen-background')
        this.setState({open: false})
    }

    render(){
        const { id, title, description, slug, dialogTitle, dialogWidth, labelButton, linkTo } = this.props
        const moduleId = id
        const ChildComponent = this.props.component

        return (
            <div className="d-flex w-100 justify-content-between">
                <div>
                    <h3 className="mb-1">{title}</h3>
                    <small>{description}</small>
                </div>
                <div className="d-flex align-items-center">
                    <RaisedButton
                        primary={true}
                        label={labelButton}
                        // containerElement={linkTo ? <Link to={linkTo} />:<span></span>}
                        icon={<ActionExtension />}
                        onTouchTap={this.handleOpen} />

                    {this.state.open === true && (this.props.uiModule.dialogOpen === false)  ?
                        <EventListener
                            target="window"
                            onKeyUp={this.handleKeyUp}
                        />:null}

                    <Drawer
                        width={dialogWidth}
                        docked={false}
                        openSecondary={true}
                        containerClassName="muiDrawerContainer"
                        overlayClassName="muiDrawerOverlay"
                        open={this.state.open}
                        onRequestChange={(open, reason) => {
                            console.log('onRequestChange', open, reason)
                        }}>
                        <AppBar
                            title={dialogTitle}
                            className="muiAppBar"
                            iconElementRight={<IconButton><NavigationClose /></IconButton>}
                            onRightIconButtonTouchTap={this.handleClose} />

                        {
                            ChildComponent
                                && <ChildComponent
                                        moduleId={moduleId}
                                        moduleSlug={slug}
                                        withoutDrawer={true}
                                    />
                        }
                    </Drawer>
                </div>
            </div>
        )
    }
}
