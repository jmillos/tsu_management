import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/app'
import CrmConfig from './containers/crm_config'
// import requirePopup from './components/require_popup'
import CrmConfigPropsEdit from './containers/crm_config_props_edit'
import CrmManageModule from './components/crm_manage_module/list/list'
import CrmManageModuleEdit from './components/crm_manage_module/edit/edit'
// import CrmPropertySettings from './containers/crm_property_settings'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CrmConfig} />
    <Route path="config" component={CrmConfig}>
        {/* <Route path="property-settings" component={requirePopup(CrmPropertySettings, 'Crear una nueva Propiedad')} /> */}
        {/* <Route path="property-settings-form" component={hocDrawerXl(CrmPropertySettings, '')} /> */}
        <Route path="property/:id" component={CrmConfigPropsEdit} />
    </Route>
    <Route
        path=":moduleId-:moduleSlug/records"
        component={CrmManageModule} />
    <Route
        path=":moduleId-:moduleSlug/records/:id"
        component={CrmManageModuleEdit} />
  </Route>
);
