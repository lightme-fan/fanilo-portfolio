import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import {ContextProvider} from './components/ContextProvider'

ReactDOM.render(
    <Router>
        <ContextProvider>
            <App />
        </ContextProvider>
    </Router>,
document.getElementById('root'))