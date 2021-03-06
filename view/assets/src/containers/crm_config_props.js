import _ from 'lodash'
import React, { Component } from 'react'
import { reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { filterSearch } from '../lib/utils'

// Material UI
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

// import SearchBar from 'material-ui-search-bar'
import SearchBar from '../lib/vendors/search_bar'

import BtnCreatePtyGroup from '../components/crm_config_props/btn_create_pty_group'
import CreatePtyItem from '../components/crm_config_props/create_pty_item'
import PtyGroupItem from '../components/crm_config_props/pty_group_item'
import * as actions from '../actions'

class CrmConfigProps extends Component {
    state = {
        open: true,
        searchText: ''
    }

    constructor(props){
        super(props)

        this.handleSearchProp = this.handleSearchProp.bind(this)
        this.onCreatePtyGroup = this.onCreatePtyGroup.bind(this)
    }

    componentWillMount(){
        this.props.fetchPropertyGroups()
        this.props.fetchProperties()
    }

    handleSearchProp(val){
        this.setState({ searchText: val })
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
            <div className="crm-config-properties">
                <List>
                    <div className="d-flex justify-content-end mt-1 mb-2 pl-3 pr-3">
                        <div className="mr-auto">
                            <SearchBar
                                className="search-bar"
                                hintText="Buscar propiedad"
                                onChange={this.handleSearchProp}
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
                            onModeCreate={this.props.setModeEdit}
                            ptyGroups={this.props.groups}
                            handleCreateProperty={this.props.createProperty}
                            titleField={this.props.titleField}
                            slugField={this.props.slugField}
                        />
                    </div>

                    {_.map(this.props.groups, group => {
                        let propsFiltered = _.filter(this.props.properties, { parent: group.id })
                        propsFiltered = filterSearch(propsFiltered, this.state.searchText)

                        return (
                            <PtyGroupItem
                                key={group.id}
                                group={group}
                                properties={propsFiltered}
                                size={propsFiltered.length}
                                onModeEdit={this.props.setModeEdit}
                                updatePropertyGroup={this.props.updatePropertyGroup}
                                searchText={this.state.searchText}
                            />
                        )
                    })}
                </List>
            </div>
        )
    }
}

const selector = formValueSelector('PtyItemForm')
function mapStateToProps(state){
    const {
        ptyGroups, 
        properties
    } = state

    return { groups: ptyGroups, properties, titleField: selector(state, 'title'), slugField: selector(state, 'slug') }
}

export default connect(mapStateToProps, actions)(CrmConfigProps)
