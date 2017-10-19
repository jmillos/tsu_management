import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import { fetchModules } from '../actions'
import CrmConfigModule from '../components/crm_config_module'

class CrmConfig extends Component {
    componentWillMount(){
        this.props.fetchModules()
    }

    render(){
        return (
            <div className="crm-config">
                <h1 className="main-title mt-2 mb-3">Configuración Módulos</h1>

                {this.props.modules.map(item => {
                    return (
                        <CrmConfigModule
                            key={item.id}
                            id={item.id}
                            name={item.title}
                            singularName={item.singular_name}
                            link="/config/property-settings"
                             />
                    )
                })}

                {/* <CrmConfigModule name="Contactos" singularName="Contacto" link="/config/property-settings" /> */}
                {/* <CrmConfigModule name="Empresas" singularName="Empresa" link="/config/property-settings-form" /> */}

                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        modules: state.modules.list,
    };
}

export default connect(mapStateToProps, { fetchModules })(CrmConfig)
