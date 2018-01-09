import { connect } from 'react-redux'

import * as actions from '../actions'
import App from '../components/app'

function mapStateToProps({}){
    return {}
}

export default connect(mapStateToProps, actions)(App)
