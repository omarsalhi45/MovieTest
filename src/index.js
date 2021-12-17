import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


import reducers from './reducers'

import App from './App'
import './index.css'

// const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
   <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'));