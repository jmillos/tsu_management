import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// Material UI
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

// import SearchBar from 'material-ui-search-bar'
import SearchBar from '../lib/vendors/search_bar'

import BtnCreatePtyGroup from '../components/crm_config_props/btn_create_pty_group'
import CreatePtyItem from '../components/crm_config_props/create_pty_item'
import PtyGroupItem from '../components/crm_config_props/pty_group_item'
import * as actions from '../actions'

class ModuleProperties extends Component {
    constructor(props){
        super(props)

        this.state = { open: true }

        this.onCreatePtyGroup = this.onCreatePtyGroup.bind(this)
    }

    componentWillMount(){
        this.props.fetchPropertyGroups()
    }

    handleToggle(){
        this.setState({ open: !this.state.open })
    }

    onCreatePtyGroup(data){
        data = { ...data, parent: this.props.moduleId, status: 'publish' }
        this.props.createPropertyGroup(data)
    }

    render(){
        return (
            <div className="module-properties">
                <List>
                    <div className="d-flex justify-content-end mt-1 mb-2 pl-3 pr-3">
                        <div className="mr-auto">
                            <SearchBar
                                className="search-bar"
                                hintText="Buscar propiedad"
                                onChange={() => console.log('onChange')}
                                onRequestSearch={() => console.log('onRequestSearch')}
                                style={{
                                    height: 36,
                                }}
                            />
                        </div>

                        <BtnCreatePtyGroup
                            onCreate={this.onCreatePtyGroup}
                        />

                        <CreatePtyItem
                            className="ml-2"
                            onModeEdit={this.props.setModeEdit}
                            ptyGroups={this.props.groups}
                        />
                    </div>

                    {_.map(this.props.groups, item => {
                        return (
                            <PtyGroupItem
                                key={item.id}
                                item={item}
                                onModeEdit={this.props.setModeEdit}
                                updatePropertyGroup={this.props.updatePropertyGroup}
                            />
                        )
                    })}
                </List>
            </div>
        )
    }
}

function mapStateToProps({ modulePtyGroups }){
    return { groups: modulePtyGroups }
}

export default connect(mapStateToProps, actions)(ModuleProperties)
