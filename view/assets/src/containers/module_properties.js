import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// Material UI
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton'
// import IconButton from 'material-ui/IconButton';
import ActionAddProperty from 'material-ui/svg-icons/content/add-circle'

// import SearchBar from 'material-ui-search-bar'
import SearchBar from '../lib/vendors/search_bar'

import BtnCreateComponent from '../components/crm_config_props/btn_create_group'
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
        this.props.createPropertyGroup(data)
    }

    render(){
        return (
            <div className="module-properties">
                <List>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', padding: '0 16px' }}>
                        <SearchBar
                            className="search-bar"
                            hintText="Buscar propiedad"
                            onChange={() => console.log('onChange')}
                            onRequestSearch={() => console.log('onRequestSearch')}
                            style={{
                                height: 36,
                            }}
                        />

                        <BtnCreateComponent onCreate={this.onCreatePtyGroup} />

                        <RaisedButton
                            label="Crear propiedad"
                            labelStyle={{
                                fontSize: '11px',
                                paddingLeft: '4px',
                                paddingRight: '8px'
                            }}
                            primary={true}
                            icon={<ActionAddProperty style={{ height: 18, width: 18 }} />}
                            style={{ lineHeight: '36px', height: 36 }}
                        />
                    </div>

                    {_.map(this.props.groups, item => {
                        return (
                            <PtyGroupItem
                                key={item.id}
                                item={item}
                                onEditGroupName={this.props.onEditGroupName}
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
