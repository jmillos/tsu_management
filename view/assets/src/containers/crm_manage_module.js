import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventListener from 'react-event-listener'

import * as actions from '../actions'

class CrmManageModule extends Component {
    render(){
        return (
            <div>
                Hola
            </div>
        )
    }
}

function mapStateToProps({  }){
    return {  }
}

export default connect(mapStateToProps, actions)(CrmManageModule)
