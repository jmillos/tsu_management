import React, { Component } from 'react'
import Note from './_note'
import Activity from './_activity'
import Task from './_task'

export default class Item extends Component {
    render(){
        const {
            item,
            item: { type },
            record,
            users
        } = this.props

        return (() => {
            switch (type) {
                case 'note':
                    return <Note item={item} record={record} users={users} />

                case 'activity':
                    return <Activity item={item} record={record} users={users} />

                case 'task':
                    return <Task item={item} record={record} users={users} />

                default:
                    return <Note item={item} record={record} users={users} />
            }
        })()
    }
}
