import React, { Component } from 'react'
import moment from 'moment'

import { CURRENT_USER_ID } from '../../../config'

export default class Item extends Component {
    formatTitle(){
        return `${this.formatAuthor()} ${this.partTitle}`
    }

    formatAuthor(){
        const {
            author
        } = this.props.item

        if(CURRENT_USER_ID == author){
            return 'Tú'
        }else{
            return this.parseUserName()
        }
    }

    parseUserName(){
        return this.props.users[parseInt(CURRENT_USER_ID)] || ''
    }

    formatDate(){
        const {
            date
        } = this.props.item

        const diff = moment().diff(date, 'days')

        console.log('diff', diff);

        return diff > 7 ? moment(date).format('LLLL'):moment(date).calendar()
    }

    recordName(){
        const {
            record
        } = this.props

        return `${record.title}`
    }
}
