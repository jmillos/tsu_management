import _ from 'lodash'
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'
import { CURRENT_USER_ID } from '../../config'

// Material UI
import {List, ListItem} from 'material-ui/List'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Subheader from 'material-ui/Subheader'

//Own components
import Checkbox from './customizer_checkbox'

class Customizer extends Component {
    state = {
        columns: [],
    }

    sortableList = SortableContainer(({items}) => {
        const SortableItem = SortableElement(({value}) => (
            <ListItem style={{ backgroundColor: '#fff', borderBottom: '1px solid #f0f0f0' }}>{value.title}</ListItem>
        ))

        return (
            <List className="list-wrapper">
                {items.map((value, index) => (
                    <SortableItem key={value.id} index={index} value={value} />
                ))}
            </List>
        )
    })

    constructor(props){
        super(props)

        this.handleCloseDialog = this.handleCloseDialog.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        // this.handleSubmit = this.props.handleSubmit(this.onSubmit)
        this.onSortEnd = this.onSortEnd.bind(this)
        this.addColumn = this.addColumn.bind(this)
        this.removeColumn = this.removeColumn.bind(this)
        this.setActions()

    }

    componentWillUpdate(nextProps, nextState){
        if(this.props.columns !== nextProps.columns){
            this.setState({ columns: nextProps.columns })
        }
    }

    setActions(){
        this.actions = [
            <FlatButton
                label="Cancelar"
                onClick={this.handleCloseDialog}
              />,
              <FlatButton
                label="Guardar"
                primary={true}
                // keyboardFocused={true}
                type="submit"
                onClick={this.onSubmit}
              />,
        ]
    }

    onSortEnd({oldIndex, newIndex}){
        this.setState({
            columns: arrayMove(this.state.columns, oldIndex, newIndex),
        });
    }

    handleCloseDialog(){
        this.props.handleDialogOpen(false)
    }

    addColumn(field){
        this.setState({ columns: [ ...this.state.columns, field ] })
    }

    removeColumn(field){
        const columns = _.remove([...this.state.columns], i => i.id !== field.id)
        this.setState({ columns })
    }

    onSubmit() {
        // console.log('PtyItemForm', values)
        const columnsId = _.map(this.state.columns, _.iteratee('id'))
        console.log('columnsId', columnsId);
        this.props.handleUpdateUser(CURRENT_USER_ID, { crm_module_preferences: { [this.props.moduleId]: { gridCols: columnsId } } }, () => {
            this.handleCloseDialog()
        })
    }

    render(){
        const {
            fields,
            groups,
            columns
        } = this.props

        const stColumns = this.state.columns

        const SortableList = this.sortableList

        console.log('stColumns', stColumns);

        return (
            <div>
                <Dialog
                      title="Personalizar columnas"
                      actions={this.actions}
                      modal={false}
                      titleStyle={{ paddingBottom: 0 }}
                      contentStyle={{ width: '60%' }}
                      open={this.props.dialogOpen}
                      autoScrollBodyContent={true}
                      onRequestClose={this.handleCloseDialog}
                    >
                    <div className="row pt-4">
                        <div className="col-md-7" style={{ borderRight: '1px solid #dfe3eb' }}>
                            {_.map(groups, group => {
                                const fieldsGroup = _.filter(fields, { parent: group.id })
                                return (
                                    <div key={group.id}>
                                       <Subheader>{group.title}</Subheader>

                                        <div className="pl-4">
                                            {
                                                (() => {
                                                    if (fieldsGroup.length > 0) {
                                                        return _.map(fieldsGroup, field => {
                                                            return <Checkbox
                                                                        key={field.id}
                                                                        handleAddColumn={this.addColumn}
                                                                        handleRemoveColumn={this.removeColumn}
                                                                        field={field}
                                                                        checked={!!_.find(stColumns, { id: field.id })}
                                                                    />
                                                        })
                                                    }else{
                                                        return <small>No tiene propiedades asociadas.</small>
                                                    }
                                                })()
                                            }
                                        </div>
                                   </div>
                               )
                           })}
                        </div>
                        <div className="col-md-5">
                            <Subheader>COLUMNAS SELECCIONADAS {Array.isArray(stColumns) && stColumns.length > 0 && `(${stColumns.length})`}</Subheader>
                            <div className="pl-3">
                            {
                                (() => {
                                    if(Array.isArray(stColumns) && stColumns.length > 0){
                                        return <SortableList
                                            items={stColumns}
                                            onSortEnd={this.onSortEnd}
                                            helperClass="Showcase__style__stylizedHelper"
                                        />
                                    }else{
                                        return <small>No tiene columnas seleccionadas.</small>
                                    }
                                })()
                            }
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

Customizer = reduxForm({form: 'RecordForm'})(Customizer);

export default Customizer
