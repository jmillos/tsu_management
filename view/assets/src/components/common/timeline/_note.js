import React, { Component } from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import NoteIcon from 'material-ui/svg-icons/av/note';

import Item from './_item'

export default class Note extends Item {
    partTitle = ' dejaste una nota acerca de '

    render(){
        const {
            content,
            author,
            date
        } = this.props.item

        const title = this.formatTitle()

        return (
            <VerticalTimelineElement className="vertical-timeline-element--note" date={this.formatDate()} iconStyle={{
              background: 'rgb(33, 150, 243)',
              color: '#fff'
          }} icon={<NoteIcon color='#FFF' />}>
                <div className="vertical-timeline-element-title">
                    <i><b>{ this.formatAuthor() }</b> { this.partTitle } <b>{ this.recordName() }</b></i>
                </div>
                <div className="vertical-timeline-element-subtitle"></div>
                <div dangerouslySetInnerHTML={{__html: content}}></div>
            </VerticalTimelineElement>
        )
    }
}
