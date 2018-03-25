import React, { Component } from 'react'
import Note from './_note'

export default class Item extends Component {
    render(){
        const {
            item,
            item: { type },
            record
        } = this.props

        return (() => {
            switch (type) {
                case 'note':
                    return <Note item={item} record={record} />
                    break;

                default:

            }
        })()
    }
}
