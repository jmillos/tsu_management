import 'react-table/react-table.css'
import '../css/bootstrap.css'
import '../css/main.css'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory, createMemoryHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
injectTapEventPlugin()

import routes from './routes'
import reducers from './reducers'
import { getAttrsFromElement } from './lib/utils'

import App from './components/app'

const createStoreWithMiddleware = composeWithDevTools( applyMiddleware(ReduxPromise, ReduxThunk) )(createStore)
const store = createStoreWithMiddleware(reducers)

const muiTheme = getMuiTheme({
    zIndex: {
        popover: 99999
    }
});

/*** CRM ***/
var el = document.getElementById('crm-app')
if(el){
  let props = getAttrsFromElement(el)

  ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router history={hashHistory} routes={routes} />
        </MuiThemeProvider>
    </Provider>
    , el)
}
/***************************************************************/

/*const proto = Object.create(HTMLElement.prototype, {
  attachedCallback: {
    value: function() {
      const mountPoint = document.createElement('div');
      this.createShadowRoot().appendChild(mountPoint);

    //   const name = this.getAttribute('name');
    //   const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
      ReactDOM.render(
          <Provider store={store}>
              <App />
          </Provider>, mountPoint);
    }
  }
});
document.registerElement('crm-configuration', {prototype: proto});*/
