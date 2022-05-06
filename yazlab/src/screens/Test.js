import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams,useLocation } from 'react-router-dom'

function Test(props) {
  const location = useLocation();
  useEffect(()=>{
    axios.post("/userCars",{"id":`${location.state.id}`})
    .then((result)=>{
      result.data.map((index)=>{
        console.log(index);
      })
    })
  },[])
  return (
    <div>
      <h2>{location.state.id}</h2>
    </div>
  )
}
export default Test