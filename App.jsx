import React, { useState, useEffect, useRef, useContext, createContext, useReducer } from 'react'
import ReactDOM from 'react-dom'
import { Icon, Button } from '@material-ui/core'
import { BrowserRouter, Link, Switch, Route, useHistory } from 'react-router-dom'
import './style.css'
import Google from './google.jsx'
import './style.css';
import reducer, { initialState } from './state.jsx'
import Context from './context.jsx';

function App(){
 
 
  return(
    <React.Fragment>
    <Context 
    initialState={initialState}
    reducer={reducer}>
    <Google />
    </Context>
    </React.Fragment>
    )
}

ReactDOM.render(
  <App />,
  mountNode);
