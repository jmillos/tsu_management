import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAddGroup from 'material-ui/svg-icons/av/library-add'
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class BtnCreateComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleTouchTap = this.handleTouchTap.bind(this)
        this.handleRequestClose = this.handleRequestClose.bind(this)
    }

    handleTouchTap(event){
        // This prevents ghost click.
        event.preventDefault();

        this.setState({open: true, anchorEl: event.currentTarget});
    }

    handleRequestClose(){
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <RaisedButton
                    onClick={this.handleTouchTap}
                    label="Crear grupo"
                    labelStyle={{
                        fontSize: '11px',
                        paddingLeft: '4px',
                        paddingRight: '8px'
                    }}
                    primary={true}
                    icon={<ActionAddGroup style={{ height: 18, width: 18 }} />}
                    style={{ margin: '0 5px 0 auto', lineHeight: '36px', height: 36 }}
                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                    animation={PopoverAnimationVertical}
                >
                    <Menu>
                        <MenuItem primaryText="Refresh" />
                        <MenuItem primaryText="Help &amp; feedback" />
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Sign out" />
                    </Menu>
                </Popover>
            </div>
        );
    }
}
