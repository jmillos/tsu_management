import React, { Component } from 'react'
import ReactTable from 'react-table'
import EventListener from 'react-event-listener'

// Material UI
import {ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionModule from 'material-ui/svg-icons/action/view-module'
import ActionDelete from 'material-ui/svg-icons/action/delete-forever'
import ImageEdit from 'material-ui/svg-icons/image/edit'
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

export default class PtyGroupItem extends Component {
    state = {
        openDialog: false,
    }

    constructor(props){
        super(props)

        this.state.inputGroupName = props.item.title

        this.handleOpenDialog = this.handleOpenDialog.bind(this)
        this.handleCloseDialog = this.handleCloseDialog.bind(this)
        this.onFocusGroupName = this.onFocusGroupName.bind(this)
        this.onUpdateItem = this.onUpdateItem.bind(this)

        this.iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="Acciones"
                tooltipPosition="bottom-left"
                >
                <MoreVertIcon color={grey400} />
            </IconButton>
        );

        this.rightIconMenu = (
            <IconMenu iconButtonElement={this.iconButtonElement}>
                <MenuItem onClick={this.handleOpenDialog} leftIcon={<ImageEdit />}>Editar nombre del grupo</MenuItem>
                <MenuItem leftIcon={<ActionDelete />}>Eliminar grupo</MenuItem>
            </IconMenu>
        )
    }

    handleOpenDialog(){
        this.props.onEditGroupName(true)
        this.setState({openDialog: true});
    }

    handleCloseDialog(){
        this.props.onEditGroupName(false)
        this.setState({openDialog: false});
    }

    handleKeyUp = (event) => {
        // 27 = esc
        if (event.keyCode === 27) {
            this.handleCloseDialog();
        }
    }

    onFocusGroupName(){
        this.refs.inputGroupName.select()
    }

    onUpdateItem(){
        this.props.updatePropertyGroup(this.props.item.id, { title: this.state.inputGroupName })
        this.handleCloseDialog()
    }

    render(){
        const { item } = this.props
        const actions = [
            <FlatButton
                label="Cancelar"
                onClick={this.handleCloseDialog}
              />,
              <FlatButton
                label="Actualizar"
                primary={true}
                keyboardFocused={true}
                onClick={this.onUpdateItem}
              />,
        ]

        return (
            <div>
                <ListItem
                    key={item.id}
                    primaryText={item.title}
                    leftIcon={<ActionModule />}
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    rightIconButton={this.rightIconMenu}
                    nestedItems={[
                        <ReactTable
                            key={1}
                            showPagination={false}
                            defaultPageSize={makeData().length}
                            data={makeData()}
                            columns={[
                                {
                                    Header: "Name",
                                    accessor: "firstName"
                                },
                                {
                                    Header: "Info",
                                    accessor: "age",
                                    filterable: false
                                }
                            ]}
                            // filterable
                        />
                    ]}
                />


                <Dialog
                      title="Cambiar nombre del grupo"
                      actions={actions}
                      modal={false}
                      contentStyle={{ width: 400 }}
                      open={this.state.openDialog}
                      onRequestClose={this.handleCloseDialog}
                    >
                        <TextField
                            ref="inputGroupName"
                            className="mui-text-input"
                            defaultValue={item.title}
                            floatingLabelText="Nombre del grupo"
                            onFocus={this.onFocusGroupName}
                            onChange={(e) => this.setState({ inputGroupName: e.target.value })}
                          />
                      {/* <DatePicker hintText="Date Picker" /> */}
                </Dialog>
            </div>
        )
    }
}




function makeData() {
    return [
        {
            firstName: "judge",
            lastName: "babies",
            age: 16
        },
        {
            firstName: "quarter",
            lastName: "driving",
            age: 17
        },
        {
            firstName: "division",
            lastName: "society",
            age: 3
        },
        {
            firstName: "lamp",
            lastName: "point",
            age: 2
        },
        {
            firstName: "argument",
            lastName: "insurance",
            age: 13
        },
        {
            firstName: "pets",
            lastName: "fan",
            age: 27
        },
        {
            firstName: "learning",
            lastName: "board",
            age: 9
        },
        {
            firstName: "observation",
            lastName: "drink",
            age: 28
        },
        {
            firstName: "burst",
            lastName: "glove",
            age: 1
        },
        {
            firstName: "acoustics",
            lastName: "animal",
            age: 19
        },
        {
            firstName: "beetle",
            lastName: "branch",
            age: 25
        },
        {
            firstName: "invention",
            lastName: "servant",
            age: 14
        }
    ];
}
