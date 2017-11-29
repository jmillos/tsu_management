import _ from 'lodash'
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'

// Material UI
import {List, ListItem} from 'material-ui/List'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Checkbox from 'material-ui/Checkbox'
import Subheader from 'material-ui/Subheader'

class Customizer extends Component {
    state = {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    }

    sortableList = SortableContainer(({items}) => {
        const SortableItem = SortableElement(({value}) => (
            // <ListItem
            //   primaryText={value}
            // />
            <ListItem style={{ backgroundColor: '#fff', borderBottom: '1px solid #f0f0f0' }}>{value}</ListItem>
        ))

        return (
            <List className="list-wrapper">
                {items.map((value, index) => (
                    <SortableItem key={`item-${index}`} index={index} value={value} />
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
        this.setActions()
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
                onClick={this.handleSubmit}
              />,
        ]
    }

    onSortEnd({oldIndex, newIndex}){
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    }

    handleCloseDialog(){
        this.props.handleDialogOpen(false)
    }

    onSubmit(data) {
        // console.log('PtyItemForm', values)
        data = { ...data, status: 'publish' }
        this.props.handleCreateRecord(this.props.moduleId, data, () => {
            this.handleCloseDialog()
        })
    }

    render(){
        const {
            fields,
            groups,
        } = this.props

        const SortableList = this.sortableList

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
                        <div className="col-md-7">
                            {_.map(groups, group => {
                                const fieldsGroup = _.filter(fields, { parent: group.id })
                                return (
                                    <div key={group.id}>
                                       <Subheader>{group.title}</Subheader>

                                        <div className="pl-4">
                                            {_.map(fieldsGroup, field => {
                                                return <Checkbox
                                                            key={field.id}
                                                            label={field.title}
                                                            // iconStyle={{ fill: '#cbd6e2' }}
                                                            // checked={this.state.checked}
                                                            // onCheck={this.updateCheck.bind(this)}
                                                            // style={styles.checkbox}
                                                        />
                                            })}
                                        </div>
                                   </div>
                               )
                           })}
                        </div>
                        <div className="col-md-5">
                            <SortableList
                                items={this.state.items}
                                onSortEnd={this.onSortEnd}
                                helperClass="Showcase__style__stylizedHelper"
                            />
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

Customizer = reduxForm({form: 'RecordForm'})(Customizer);

export default Customizer
