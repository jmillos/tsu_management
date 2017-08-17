import React, { Component } from 'react'
import { Link } from 'react-router'

import CrmConfigDrawer from './crm_config_drawer'
import ModuleProperties from './module_properties'

class CrmConfigModule extends Component {
    render(){
        const { name, singularName } = this.props
        const moduleName = name.toLowerCase()
        const moduleSingularName = singularName.toLowerCase()

        return (
            <div className="crm-config-module">
                <h3>{name}</h3>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action flex-column align-items-center">
                        <CrmConfigDrawer
                            title={`Configuración de propiedades para el módulo ${moduleName}`}
                            description={`Crea, edita y gestiona las propiedades que estaran disponibles en el módulo de ${moduleName}.`}
                            dialogTitle="Configuración de propiedades"
                            component={ModuleProperties} />
                    </li>
                    <li className="list-group-item list-group-item-action flex-column align-items-center">
                        <CrmConfigDrawer
                            title={`Configura las propiedades que tu equipo verá en los registros de ${moduleName}`}
                            description={`Selecciona las propiedades que aparecerán en todos los registros de ${moduleName} de todos tus usuarios del CRM.`}
                            dialogTitle={`Propiedades de registro de ${moduleSingularName}`} />
                    </li>
                </ul>
            </div>
        )
    }
}

export default CrmConfigModule
