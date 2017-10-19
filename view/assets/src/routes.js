import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import CrmConfig from './containers/crm_config'
import requirePopup from './components/require_popup'
import requireDrawer from './components/require_drawer'
import CrmPropertySettings from './containers/crm_property_settings'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CrmConfig} />
    <Route path="config" component={CrmConfig}>
        <Route path="property-settings" component={requirePopup(CrmPropertySettings, 'Crear una nueva Propiedad')} />
        <Route path="property-settings-form" component={requireDrawer(CrmPropertySettings, '')} />
    </Route>
    {/* <Route path="posts/:id" component={PostsShow} /> */}
  </Route>
);
