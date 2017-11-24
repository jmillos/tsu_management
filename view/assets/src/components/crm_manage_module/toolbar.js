import React, { Component } from 'react'

// Material UI
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton'

import SearchBar from '../../lib/vendors/search_bar'

export default class ModuleToolbar extends Component {
    constructor(props){
        super(props)

        this.handleSearch = this.handleSearch.bind(this)
        this.handleAddContact = this.handleAddContact.bind(this)
        this.handleOpenCustomizer = this.handleOpenCustomizer.bind(this)
    }

    handleSearch(){

    }

    handleAddContact(){
        this.props.handleModeCreate(true)
    }

    handleOpenCustomizer(){
        this.props.handleDialogOpen(true)
    }

    render(){
        return (
            <Toolbar>
                <ToolbarGroup className="ml-0 mr-0" firstChild={true}>
                    <ToolbarTitle text="Opciones" />
                </ToolbarGroup>

                <ToolbarGroup>
                    <SearchBar
                        className="search-bar"
                        hintText="Buscar un contacto"
                        onChange={this.handleSearch}
                        onRequestSearch={() => console.log('onRequestSearch')}
                        style={{
                            height: 36,
                        }}
                    />
                    <RaisedButton
                        onClick={this.handleOpenCustomizer}
                        label="Personalizar"
                        // primary={true}
                        // icon={<ActionAddGroup style={{ height: 18, width: 18 }} />}
                        style={{ margin: '0 20px' }}
                    />
                    <RaisedButton
                        onClick={this.handleAddContact}
                        label="Agregar contacto"
                        primary={true}
                        style={{ margin: '0' }}
                    />
                </ToolbarGroup>
            </Toolbar>
        )
    }
}
