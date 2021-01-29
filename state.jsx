import React, { useState, useEffect, useContext, createContext, useRef, useMemo, useCallback, useReducer } from 'react'

import { Icon, Button } from '@material-ui/core'

export const initialState = {
  term: null
}

export const actionTypes = {
  perform: 'search'
}

const reducer = (state, action)=>{
    console.log(action, initialState)
  switch(action.type){
    case actionTypes.perform:
      return { ...state, term: action.term }
    default: return state
  }
}

export default reducer