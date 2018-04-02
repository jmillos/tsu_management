import _ from 'lodash'
import React, { Component } from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import ActivityIcon from 'material-ui/svg-icons/maps/local-activity'
import CallIcon from 'material-ui/svg-icons/communication/call'
import MailIcon from 'material-ui/svg-icons/communication/email'
import MeetingIcon from 'material-ui/svg-icons/action/date-range'

import { resultsCall } from '../../../config'
import Item from './_item'

export default class Activity extends Item {
    partTitle = ' registraste una actividad con '
    result = 'Ninguna'
    icon = <ActivityIcon color='#FFF' />

    constructor(props){
        super(props)

        this.format()
    }

    format(){
        const {
            field_type
        } = this.props.item

        switch (field_type) {
            case 'call':
                this.icon = <CallIcon color='#FFF' />
                this.partTitle = ' registraste una llamada con '
                break;

            case 'mail':
                this.icon = <MailIcon color='#FFF' />
                this.partTitle = ' registraste un correo utilizando '
                break;

            case 'meeting':
                this.icon = <MeetingIcon color='#FFF' />
                this.partTitle = ' registraste una reunión con '
                break;
        }

        this.getResult()
    }

    getResult(){
        const {
            field_result
        } = this.props.item

        if(field_result){
            const item = _.find(resultsCall, item => item.key == field_result)
            this.result = item.label
        }
    }

    render(){
        const {
            content,
            author,
            field_type,
            field_result,
            date
        } = this.props.item

        const title = this.formatTitle()

        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--activity"
                date={this.formatDate()}
                iconStyle={{
                    background: 'rgb(233, 30, 99)',
                    color: '#fff'
                }}
                icon={this.icon}
            >
                <div className="vertical-timeline-element-title">
                    <i><b>{ this.formatAuthor() }</b> { this.partTitle } <b>{ this.recordName() }</b></i>
                </div>
                <small className="vertical-timeline-element-subtitle">
                    <b>Resultado de la llamada:</b> { this.result }
                </small>
                <div dangerouslySetInnerHTML={{__html: content}}></div>
            </VerticalTimelineElement>
        )
    }
}
