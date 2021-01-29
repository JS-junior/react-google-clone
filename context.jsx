import React, { useState, useEffect, useRef, useContext, createContext, useReducer } from 'react'

export const StateProvider = createContext()

function Context({ initialState, reducer, children }){
  return(
  <React.Fragment>
  <StateProvider.Provider value={useReducer(reducer,initialState)}>
  {children}
  </StateProvider.Provider>
  </React.Fragment>)
}

export default Context

export const useStateValue =()=> useContext(StateProvider)