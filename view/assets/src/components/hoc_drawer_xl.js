import React, { Component } from 'react'
import EventListener from 'react-event-listener'

// Material UI
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

class HOCDrawer extends Component {
    state = {
        open: true
    }

    calcWidthDialogManage(){
        const elSideMenu = document.getElementById('adminmenuback')
        return window.innerWidth - 36 //elSideMenu.offsetWidth
    }

    render() {
        const {
            title
        } = this.props

        return (
            <div>
                <EventListener
                    target="window"
                    onKeyUp={this.props.handleKeyUp}
                />

                <Drawer
                    width={this.calcWidthDialogManage()}
                    docked={false}
                    openSecondary={true}
                    containerClassName="muiDrawerContainer"
                    overlayClassName="muiDrawerOverlay"
                    open={this.state.open}
                    onRequestChange={(open, reason) => {
                        console.log('onRequestChange', open, reason)
                    }}>
                    <AppBar
                        title={title}
                        className="muiAppBar"
                        iconElementRight={<IconButton><NavigationClose /></IconButton>}
                        onRightIconButtonTouchTap={this.props.handleClose} />

                    { this.props.children }
                </Drawer>
            </div>
        );
    }
}

export default HOCDrawer
