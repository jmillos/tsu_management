import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import ActionAddGroup from 'material-ui/svg-icons/av/library-add'
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

export default class BtnCreateComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            valInputName: null,
            errorText: null
        };

        this.handleTouchTap = this.handleTouchTap.bind(this)
        this.handleRequestClose = this.handleRequestClose.bind(this)
        this.onChangeInputName = this.onChangeInputName.bind(this)
        this.onCreate = this.onCreate.bind(this)
    }

    handleTouchTap(event){
        // This prevents ghost click.
        event.preventDefault();

        this.setState({open: true, anchorEl: event.currentTarget});
    }

    handleRequestClose(){
        this.setState({open: false});
    }

    onChangeInputName(event){
        const val = event.target.value
        this.setState({ valInputName: val })

        if(val){
            this.setState({ errorText: null })
        }
    }

    onCreate(event){
        event.preventDefault()

        this.setState({ errorText: !this.state.valInputName ? 'Este campo es requerido.':null })

        if(this.state.valInputName){
            this.handleRequestClose()
            this.setState({ valInputName: null })
            this.props.onCreate({ title: this.state.valInputName, status: 'publish', parent: 12153 })
        }
    }

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
                    className="jg-popover"
                >
                    <form onSubmit={this.onCreate}>
                        <div>
                            <TextField
                                onChange={this.onChangeInputName}
                                hintText="escribir un nombre"
                                floatingLabelText="Nombre"
                                floatingLabelFixed={true}
                                errorText={this.state.errorText}
                            />
                        </div>
                        <RaisedButton type="submit" label="Crear" primary={true} />
                        <RaisedButton
                            onClick={this.handleRequestClose}
                            label="Cancelar"
                            style={{ marginLeft: 10 }}
                        />
                    </form>
                </Popover>
            </div>
        );
    }
}
