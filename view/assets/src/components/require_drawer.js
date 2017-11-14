import React, { Component } from 'react'

// Material UI
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

export default function(ComposedComponent, compProps) {
    class PopupDrawer extends Component {
        constructor(props) {
            super(props);
            this.state = {open: true};
        }

        handleToggle = () => this.setState({open: !this.state.open})

        handleClose = () => this.props.history.push('/config')

        render() {
            const {
                title,
                width
            } = compProps

            return (
                <Drawer
                    width={width}
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
                        onRightIconButtonTouchTap={this.handleClose} />

                    { ComposedComponent ? <ComposedComponent /*moduleId={moduleId}*/ />:null }
                </Drawer>
            );
        }
    }

    return PopupDrawer
}
