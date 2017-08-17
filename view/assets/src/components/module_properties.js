import React, { Component } from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactTable from 'react-table'

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton'
// import IconButton from 'material-ui/IconButton';
import ActionModule from 'material-ui/svg-icons/action/view-module'
import ActionDelete from 'material-ui/svg-icons/action/delete-forever'
import ImageEdit from 'material-ui/svg-icons/image/edit'
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

class ModuleProperties extends Component {
    constructor(props){
        super(props)

        this.state = { open: true }

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
                <MenuItem leftIcon={<ImageEdit />}>Editar nombre del grupo</MenuItem>
                <MenuItem leftIcon={<ActionDelete />}>Eliminar grupo</MenuItem>
            </IconMenu>
        );
    }

    handleToggle(){
        this.setState({ open: !this.state.open })
    }

    render(){
        return (
            <div className="module-properties">
                <List>
                    <Subheader>Nested List Items</Subheader>
                    <ListItem
                        primaryText="Inbox"
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
                </List>
            </div>
        )
    }
}

export default ModuleProperties

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
