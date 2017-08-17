import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import RaisedButton from 'material-ui/RaisedButton';
import ActionExtension from 'material-ui/svg-icons/action/extension'

class CrmConfigDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};

        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this._handleEscKey = this._handleEscKey.bind(this)
    }

    componentWillMount(){
        document.addEventListener("keyup", this._handleEscKey, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keyup", this._handleEscKey, false);
    }

    _handleEscKey(event){
        if(event.keyCode == 27){
            this.handleClose();
        }
    }

    handleOpen(){
        document.body.classList.add('ui-full-screen-background')
        this.setState({open: true})
    }

    handleClose(){
        document.body.classList.remove('ui-full-screen-background')
        this.setState({open: false})
    }

    render(){
        const { title, description, dialogTitle } = this.props
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
                        label="Administrar"
                        // containerElement={<Link to={this.props.link} />}
                        icon={<ActionExtension />}
                        onTouchTap={this.handleOpen} />

                    <Drawer
                        width={720}
                        docked={false}
                        openSecondary={true}
                        containerClassName="muiDrawerContainer"
                        overlayClassName="muiDrawerOverlay"
                        open={this.state.open}
                        onKeyUp>
                        <AppBar
                            title={dialogTitle}
                            className="muiAppBar"
                            iconElementRight={<IconButton><NavigationClose /></IconButton>}
                            onRightIconButtonTouchTap={this.handleClose} />

                        { ChildComponent ? <ChildComponent />:null }
                    </Drawer>
                </div>
            </div>
        )
    }
}

export default CrmConfigDrawer
