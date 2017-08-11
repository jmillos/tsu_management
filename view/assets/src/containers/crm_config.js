import React, { Component } from 'react'
import { Link } from 'react-router'

import CrmConfigModule from '../components/crm_config_module'

class CrmConfig extends Component {
    render(){
        return (
            <div className="crm-config">
                <h1 className="main-title mt-2 mb-3">Configuración Módulos</h1>

                <CrmConfigModule name="Contactos" singularName="Contacto" link="/config/property-settings" />
                <CrmConfigModule name="Empresas" singularName="Empresa" link="/config/property-settings-form" />

                {this.props.children}
            </div>
        )
    }
}

export default CrmConfig
