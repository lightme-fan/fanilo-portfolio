import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Router } from 'react-router-dom'
import App from './components/App'
import {ContextProvider} from './components/ContextProvider'

ReactDOM.render(<ContextProvider><App /></ContextProvider>, document.getElementById('root'))