import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module'
import App from './App';
import { prod } from './config';
import './style.css'

TagManager.initialize(prod)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
