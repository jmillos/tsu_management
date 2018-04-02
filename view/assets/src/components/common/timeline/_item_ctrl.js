import React, { Component } from 'react'
import Note from './_note'
import Activity from './_activity'

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

                case 'activity':
                    return <Activity item={item} record={record} />

                default:
                    return <Note item={item} record={record} />
            }
        })()
    }
}
