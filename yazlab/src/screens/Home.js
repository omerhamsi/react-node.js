import React, { useEffect, useState } from 'react'
import Map from './MapCars'
import { Link } from "react-router-dom"
import axios from 'axios'
function Home() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [start,setStart]=useState("");
  const [end,setEnd]=useState("");
  useEffect(()=>{
    
  })
  const handleStart = (event) => {
    setStart(event.target.value);
  }
  const handleEnd = (event) => {
    setEnd(event.target.value);
  }
  const handleSubmit = (event) => {
    console.log(start)
    axios.post("/time",{"start":start,"end":end}).then((result)=>{
      console.log(result);
    }).catch((result)=>{
      console.log(result)
    })
    event.preventDefault();
  }
  return (
    <div>
      <Link to={"/map"}>Map sayfası</Link>
      <form onSubmit={handleSubmit}>
        <h2>zaman aralığı belirtiniz</h2>
        <label>başlangıç zamanı</label>
        <input type="time" id="appt" name="start" value={start}
         onChange={handleStart} min="09:00" max="18:00" />
        <label>bitiş zamanı</label>
        <input type="time" id="appt" name="end" value={end}
          onChange={handleEnd} min="09:00" max="18:00"></input>

          <input type="submit"></input>
      </form>
    </div>
  )
}
export default Home
/*
<form action='/userCheck' method='get'>
        <label>
          Name:
          <input onChange={handleName} type="text" name="name" value={name} />
        </label>
        <label>
          Password
          <input onChange={handlePassword} type="password" value={password} />
        </label>
        <input type="submit" value="Submit" onSubmit={handleSubmit} />
</form> */