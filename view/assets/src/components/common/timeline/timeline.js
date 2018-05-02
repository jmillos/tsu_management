import React, { Component } from 'react'
import _ from 'lodash'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

import SchoolIcon from 'material-ui/svg-icons/social/school';
import WorkIcon from 'material-ui/svg-icons/action/work';

import { timeline } from '../../../lib/utils'
import Item from './_item_ctrl'

import 'react-vertical-timeline-component/style.min.css';
import './timeline.scss'

export default class Timeline extends Component {
    items = []

    componentWillMount(){
        this.items = timeline.orderItems(this.props)
    }

    componentWillReceiveProps(nextProps){
        if(
            !_.isEqual(this.props.notes, nextProps.notes)
                || !_.isEqual(this.props.activities, nextProps.activities)
                || !_.isEqual(this.props.tasks, nextProps.tasks)
        ){
            console.log('nextProps', this.props.tasks, nextProps.tasks);
            this.items = timeline.orderItems(nextProps)
        }
    }

    render() {
        console.log('items', this.items, this.props.notes);
        const {
            record,
            users
        } = this.props

        return _.size(this.items) > 0 && (
            <VerticalTimeline>
                {
                    _.map(this.items, (item) => {
                        return <Item key={item.id} item={item} record={record} users={users} />
                    })
                }
                {/* <VerticalTimelineElement className="vertical-timeline-element--work" date="2011 - present" iconStyle={{
                  background: 'rgb(33, 150, 243)',
                  color: '#fff'
              }} icon={<WorkIcon color='#FFF' />}>
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work" date="2010 - 2011" iconStyle={{
                  background: 'rgb(33, 150, 243)',
                  color: '#fff'
              }} icon={<WorkIcon color='#FFF' />}>
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work" date="2008 - 2010" iconStyle={{
                  background: 'rgb(33, 150, 243)',
                  color: '#fff'
                }} icon={<WorkIcon color='#FFF' />}>
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                      User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work" date="2006 - 2008" iconStyle={{
                  background: 'rgb(33, 150, 243)',
                  color: '#fff'
                }} icon={<WorkIcon color='#FFF' />}>
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                      User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" date="April 2013" iconStyle={{
                  background: 'rgb(233, 30, 99)',
                  color: '#fff'
                }} icon={<SchoolIcon color='#FFF' />}>
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                      Strategy, Social Media
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" date="November 2012" iconStyle={{
                  background: 'rgb(233, 30, 99)',
                  color: '#fff'
                }} icon={<SchoolIcon color='#FFF' />}>
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                      Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" date="2002 - 2006" iconStyle={{
                  background: 'rgb(233, 30, 99)',
                  color: '#fff'
                }} icon={<SchoolIcon color='#FFF' />}>
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                      Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement> */}
            </VerticalTimeline>
        )
    }
}
