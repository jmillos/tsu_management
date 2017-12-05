import React, { Component } from 'react'
import MUICheckbox from 'material-ui/Checkbox'

export default class Checkbox extends Component {
    constructor(props){
        super(props)

        this.onCheck = this.onCheck.bind(this)
    }

    onCheck(e, isInputChecked){
        const {
            handleAddColumn,
            handleRemoveColumn,
            field
        } = this.props

        isInputChecked === true ? handleAddColumn(field):handleRemoveColumn(field)
    }

    render(){
        const {
            field
        } = this.props

        return <MUICheckbox
                    key={field.id}
                    label={field.title}
                    // iconStyle={{ fill: '#cbd6e2' }}
                    // checked={this.state.checked}
                    onCheck={this.onCheck}
                    // style={styles.checkbox}
                />
    }
}
