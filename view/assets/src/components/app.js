import React, { Component } from 'react'

import { CURRENT_USER_ID } from '../config'

class App extends Component {
	componentWillMount(){
		this.props.fetchUser(CURRENT_USER_ID)
        this.props.fetchModules()
	}

	render(){
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default App
