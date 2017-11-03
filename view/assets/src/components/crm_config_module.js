import React, { Component } from 'react'
import { Link } from 'react-router'

import CrmConfigManager from '../containers/crm_config_manager'
import CrmConfigProps from '../containers/crm_config_props'
import CrmManageModule from '../containers/crm_manage_module'

class CrmConfigModule extends Component {
    calcWidthDialogManage(){
        const elSideMenu = document.getElementById('adminmenuback')
        return window.offsetWidth - elSideMenu.offsetWidth
    }

    render(){
        const { id, name, singularName } = this.props
        const moduleName = name.toLowerCase()
        const moduleSingularName = singularName.toLowerCase()

        return (
            <div className="crm-config-module">
                <h3>{name}</h3>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action flex-column align-items-center">
                        <CrmConfigManager
                            id={this.props.id}
                            title={`Configuración de propiedades para el módulo ${moduleName}`}
                            description={`Crea, edita y gestiona las propiedades que estaran disponibles en el módulo de ${moduleName}.`}
                            dialogTitle="Configuración de propiedades"
                            dialogWidth={720}
                            labelButton="Administrar"
                            component={CrmConfigProps} />
                    </li>
                    <li className="list-group-item list-group-item-action flex-column align-items-center">
                        <CrmConfigManager
                            id={this.props.id}
                            title={`Configura las propiedades que tu equipo verá en los registros de ${moduleName}`}
                            description={`Selecciona las propiedades que aparecerán en todos los registros de ${moduleName} de todos tus usuarios del CRM.`}
                            labelButton="Administrar"
                            dialogTitle={`Propiedades de registro de ${moduleSingularName}`}
                            dialogWidth={720} />
                    </li>
                    <li className="list-group-item list-group-item-action flex-column align-items-center">
                        <CrmConfigManager
                            id={this.props.id}
                            title={`Gestiona los registros de ${moduleName}`}
                            description={`Edita, elimina, depura y busca en todos los registros de ${moduleName}.`}
                            dialogTitle={`${name}`}
                            dialogWidth={this.calcWidthDialogManage()}
                            labelButton="Gestionar"
                            component={CrmManageModule} />
                    </li>
                </ul>
            </div>
        )
    }
}

export default CrmConfigModule
