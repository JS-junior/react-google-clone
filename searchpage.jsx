import React, { useState, useEffect, useContext, createContext, useRef, useMemo, useCallback, useReducer } from 'react'

import { Icon, Button, Input } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import './style.css'
import { useStateValue } from './context.jsx'

function SearchPage(){
 
  const [ videoData, setVideoData ] = useState([])
  const [ image, setImage ] = useState([])
  const [ data, setData ] = useState([])
  const [ query, setQuery ] = useState("")
  const [ pages, setPages ] = useState('all')
  const [ news, setNews ] = useState([])
  const [ {term}, dispatch ] = useStateValue()
 
 /*useEffect(()=>{
   
 },[])*/
 
 
const api_key = "AIzaSyBQl6Csfy2OTISWJAnNtoJ5gKiHTUDKcGc";

const engineId ="e37376f4aa023470e";

// Images 

function GoogleSearch(){
fetch(`https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${engineId}&q=${query}`)
.then((res)=>{return res.json()})
.then((dat)=>{console.log(dat)
  setData(dat.items)
 fetchVideo()
})
}


  const fetchData = ()=>{ 
 fetch(`https://api.unsplash.com/search/photos?client_id=R6D6GMXXUkijeI_K7EO92cD9m68xr2IgzREZOUKdW5Q&query=${query}&orientation=squarish&per_page=250`)
 .then((res)=>{
   return res.json()
 })
 .then((data)=>{
 setImage(data.results)
 })
  }

function Photos(){
  return(
    <div>
       {image.map((link, index)=>{
      return( <img key={index} id={index} src={link.urls.regular} className="images" />)
    })}
    </div>
    )
}

function DataElement({ page }){
  
  if(page === 'all'){
  return(
    <React.Fragment>
    
    
 {data.map((val)=>{
   return( 
     <div className="webData">
       <a href={val.link}>{val.displayLink}<h5>{val.title}</h5></a>
       <p>{val.snippet}</p>
       </div>
    )
   })} 
    
    </React.Fragment>
    )} 
    else if(page === 'images'){
      return(
   <React.Fragment>
   <Photos />
   </React.Fragment>
        )} 
    else if(page === 'videos'){
      return (
   <React.Fragment>
 {videoData.map((val)=>{
 return(
 <a href={"https://www.youtube.com/embed/" + val.id.videoId}>
   <div className="videoBox" >
   <img style={{ width:"40%", height:"22vh"}} src={val.snippet.thumbnails.high.url} />
    <h6>{val.snippet.title}</h6>
   </div></a>
   )
 })} 
   </React.Fragment>
   )}
   else if(page === 'news'){
     return(
   <React.Fragment>
 {news.map((val)=>{
   return(
    <a href={val.url}>
   <div className="videoBox" >
   <img style={{ width:"40%", height:"22vh"}} src={val.image} />
    <h6>{val.title}</h6>
   </div></a>
   )
 })} 
   </React.Fragment>
       )}
   else if(page === 'shopping'){
     return(
   <React.Fragment>
<iframe src="map.html" style={{ width:"100%", height:"80vh"}} />
   </React.Fragment>
       )}
}

function fetchVideo(){
fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBzLTP3KyuV74wUtfow19QnAizwOFRF0uc&q=${query}&maxResults=10&type&type=video&part=snippet`).then((res)=>{ return res.json()}).then((data)=>{console.log(data)
setVideoData(data.items)
})
}

function fetchNews(){
  fetch(`https://gnews.io/api/v4/top-headlines?token=a10708ea5531f41a3d3d66dcb5ca7a7a&lang=en&q=${query}`)
  .then((res)=>{ return res.json() })
  .then((dat)=>{ setNews(dat.articles)})
  .catch((err)=>{ console.log(err)})
}

// render portion

  return (
    
    <React.Fragment>
  
    <div style={{ boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.5)", width: "110%", marginBottom:"3.5%"}}>
    <div className="TopHeader">
     
      <div className="headerInput">
    <Icon onClick={()=>{fetchData();fetchVideo(); GoogleSearch();fetchNews()
    }}>search</Icon>
<Input type="text" value={query}
onChange={(e)=>{ setQuery(e.target.value)}} className="headerTerm" placeholder="" />
      <Icon>mic_icon</Icon>
      </div><br/><br/></div>
     <div style={{ margin: "0% 0% 0% 0%",
    display: "flex",
    width:'100%',
    flexDirection: "row",
    overflowX: "scroll",
    overflowY: "hidden" }}>
     <Icon onClick={()=>{setPages('all')}} className="search_page_icons">search</Icon>
      <Icon onClick={()=>{setPages('images')}} className="search_page_icons">image_icon</Icon>
      <Icon onClick={()=>{setPages('videos')}} className="search_page_icons">movie</Icon>
      <Icon onClick={()=>{setPages('news')}} className="search_page_icons">description_icon</Icon>
      <Icon onClick={()=>{setPages('shopping')}} className="search_page_icons">room_icon</Icon>
      <Icon className="search_page_icons">local_offer</Icon>
     <Icon className="search_page_icons">book</Icon> </div>
      <br/>
 <div style={{ margin: "0% 0% 0% 0%",
   display: "flex",
       width:'100%',
   flexDirection: "row",
   overflowX: "scroll",
   overflowY: "hidden" }}>
  <span onClick={()=>{setPages('all')}} className="search_page_txts">all</span>
  <span onClick={()=>{setPages('images')}} className="search_page_txts">images</span>
  <span onClick={()=>{setPages('videos')}} className="search_page_txts">videos</span>
  <span onClick={()=>{setPages('news')}} className="search_page_txts">news</span>
 <span onClick={()=>{setPages('shopping')}} className="search_page_txts">maps</span>
<span className="search_page_txts">shopping</span>
 <span className="search_page_txts">books</span>
    </div>  <div className="border_icons"></div>
</div>
<DataElement page={pages} /> 
<h1>{term}</h1>
    </React.Fragment>
    )
}
export default SearchPage