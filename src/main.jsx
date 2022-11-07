import React from 'react'
import ReactDOM from 'react-dom/client'
/* import { HooksApp } from './HooksApp';
import { CounterApp } from "./01-useState/CounterApp"; */

import { CounterWithCustormHook } from './01-useState/CounterWithCustormHook';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustormHook />
  </React.StrictMode>
)
