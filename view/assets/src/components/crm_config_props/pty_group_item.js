import React, { Component } from 'react'
import ReactTable from 'react-table'
import { Link } from 'react-router'
import EventListener from 'react-event-listener'

import { formFields } from './form_fields'

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
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors'

import { defaultsReactTable } from '../../config'

export default class PtyGroupItem extends Component {
    state = {
        openDialog: false,
        properties: [],
        sort: null
    }

    constructor(props){
        super(props)

        this.state.inputGroupName = props.group.title

        this.handleOpenDialog = this.handleOpenDialog.bind(this)
        this.handleCloseDialog = this.handleCloseDialog.bind(this)
        this.handleSortedChange = this.handleSortedChange.bind(this)
        this.onFocusGroupName = this.onFocusGroupName.bind(this)
        this.onUpdateItem = this.onUpdateItem.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.setButtonsActions()
    }

    setButtonsActions(){
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
        this.props.onModeEdit(true)
        this.setState({openDialog: true});
    }

    handleCloseDialog(){
        this.props.onModeEdit(false)
        this.setState({openDialog: false});
    }

    handleKeyUp = (event) => {
        // 27 = esc
        if (event.keyCode === 27) {
            this.handleCloseDialog();
        }
    }

    handleSortedChange(newSorted, column, shiftKey){
        console.log('params', newSorted);
        this.setState({ sort: newSorted })
    }

    sortProps(properties){
        const { sort } = this.state
        if(Array.isArray(sort) && sort.length > 0){
            const fields = _.map(sort, _.iteratee('id'))
            const dirs = _.map(sort, i => i.desc === false ? 'asc':'desc')
            properties = _.orderBy(properties, fields, dirs)
        }

        return properties
    }

    onFocusGroupName(){
        this.refs.inputGroupName.select()
    }

    onUpdateItem(){
        this.props.updatePropertyGroup(this.props.group.id, { title: this.state.inputGroupName })
        this.handleCloseDialog()
    }

    onSubmit(e){
        e.preventDefault()
        this.onUpdateItem()
    }

    render(){
        if( this.props.searchText && !(Array.isArray(this.props.properties) && this.props.properties.length > 0) ){
          return null
        }

        const {
            group,
            properties,
            size
        } = this.props

        const sortedProperties = this.sortProps(properties)

        // console.log('props', group.id, properties, size);

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
                    primaryText={group.title}
                    leftIcon={<ActionModule />}
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    rightIconButton={this.rightIconMenu}
                    nestedItems={[
                        <ReactTable
                            {...defaultsReactTable}
                            key={1}
                            showPagination={false}
                            defaultPageSize={size}
                            data={sortedProperties}
                            manual
                            columns={[
                                {
                                    Header: 'Etiqueta',
                                    accessor: 'title'
                                },
                                {
                                    Header: 'Tipo de campo',
                                    accessor: 'field_type',
                                    Cell: (cell) => {
                                        const field = _.find(formFields, { type: cell.value })

                                        return field.label
                                    },
                                    filterable: false
                                },
                                {
                                    Header: 'Acciones',
                                    accessor: 'id',
                                    Cell: (cell) => {
                                        return <Link to={`config/property/${cell.value}`}>Editar</Link>
                                    },
                                    filterable: false
                                }
                            ]}
                            noDataText='No se encontraron propiedades'
                            onSortedChange={this.handleSortedChange}
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
                        <form onSubmit={this.onSubmit}>
                            <TextField
                                ref="inputGroupName"
                                className="mui-text-input"
                                defaultValue={group.title}
                                floatingLabelText="Nombre del grupo"
                                onFocus={this.onFocusGroupName}
                                onChange={(e) => this.setState({ inputGroupName: e.target.value })}
                              />
                        </form>
                      {/* <DatePicker hintText="Date Picker" /> */}
                </Dialog>
            </div>
        )
    }
}
