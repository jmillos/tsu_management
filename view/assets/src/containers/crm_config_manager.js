import { connect } from 'react-redux'

import * as actions from '../actions'
import CrmConfigManager from '../components/crm_config_manager'

function mapStateToProps({ uiModule }){
    return { uiModule }
}

export default connect(mapStateToProps, actions)(CrmConfigManager)
