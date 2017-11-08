import React, { Component } from 'react'
import { Link } from 'react-router'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

export default function(ComposedComponent, popupTitle = '') {
    class Popup extends Component {
        state = {
            open: true,
        }

        handleOpen = () => {
            this.setState({open: true});
        };

        handleClose = () => {
            // this.setState({open: false});
            this.context.router.push('/config')
        };

        render(){
            const actions = [
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
                    onTouchTap={this.handleClose}
                />,
            ];

            return (
                <Dialog
                    title={popupTitle}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    <ComposedComponent routeParams={this.props.routeParams} />
                </Dialog>
            )
        }
    }

    return Popup
}
