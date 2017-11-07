import React, { Component } from 'react'

import ModuleToolbar from './crm_manage_module/toolbar'
import ModuleGrid from './crm_manage_module/grid'

export default class CrmManageModule extends Component {
    render(){
        return(
            <div className="crm-manage-module">
                <ModuleToolbar />

                <ModuleGrid />
            </div>
        )
    }
}
