import React, { useState, useEffect, useRef, useContext, createContext } from 'react'
import ReactDom from 'react-dom'
import { Icon, Button, Avatar } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import './style.css'
import { useStateValue } from './context.jsx'
import { actionTypes } from './state.jsx'
import SearchPage from './searchpage.jsx'

function Google(){
  
  const [ query, setQuery ] = useState("")
  const [{}, dispatch ] = useStateValue()
  const [ page, setPage ] = useState(false)  
  
  const appStateFlow = ()=>{
    dispatch({
      type: actionTypes.perform,
      term: query
    })
    setPage(true)
  }
  
   
  return (
    
    <React.Fragment>
    {!page ?
    <div>
    <div className="Text">
    <span style={{}}>home</span>
    <span style={{marginLeft:"10%"}}>images</span>
  <Icon style={{marginLeft:"45%", position:"absolute", top:"0"}}>apps_icon</Icon>
  <Icon style={{marginLeft:"55%", position: "absolute",top:"0"}}>account_circle_two_tone</Icon>
    </div>
    <div className="Header">
    <img className="logo" src="http://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
  <div className="inputdiv">
  <Icon>search</Icon>
    <input type="text" className="inpu" value={query} onChange={(event)=>{ setQuery(event.target.value)}} />
   <Icon>mic</Icon>
    </div>
    <button className="searchbtn" variant="outlined" onClick={appStateFlow}>search</button>
    <button className="searchbtn" variant="outlined" onClick={()=>{ 
    }}>I'm feeling lucky</button>
     
    </div>
  <br/> <br/> <br/>
  <span> Follow me on</span><br/>
  <Icon>facebook</Icon>
    <Icon>android</Icon>
    </div>
 :
     <SearchPage /> 
    }
   </React.Fragment>
    )
}

export default Google;