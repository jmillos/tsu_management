import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton';

export default function(ComposedComponent, popupTitle = '') {
    class PopupDrawer extends Component {
        constructor(props) {
            super(props);
            this.state = {open: true};
        }

        handleToggle = () => this.setState({open: !this.state.open})

        handleClose = () => this.props.history.push('/config')

        render() {
            return (
                <Drawer
                    docked={false}
                    width={600}
                    containerClassName="muiDrawerContainer"
                    overlayClassName="muiDrawerOverlay"
                    open={this.state.open}
                    openSecondary={true}
                    onRequestChange={this.handleClose}
                    >
                        Require Drawer
                        <ComposedComponent />

                        <RaisedButton
                            label="X"
                            onTouchTap={this.handleClose} />
                </Drawer>
            );
        }
    }

    return PopupDrawer
}
