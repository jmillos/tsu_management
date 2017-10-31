import React, {Component} from 'react'
import { Field } from 'redux-form'

import {  MUITextField } from 'redux-form-material-ui'

export default class TextField extends Component {
    render(){
        return (
            <MUITextField {...this.props} />
        )
    }
}
