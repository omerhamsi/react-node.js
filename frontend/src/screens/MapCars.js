import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps"
import axios from 'axios'
import { useEffect } from 'react'
import { useParams,useLocation } from 'react-router-dom'
function Map(props) {
    const location = useLocation();
    const navigate=useNavigate();
    const [userCar, setUserCar] = useState([]);
    const [selected, setSelected] = useState(null);
    const [userofcar,setuserofcar]=useState([]);
    const [userTimecar,setuserTimecar]=useState([]);
    const [lat, setLat] = useState("blue");
    const [lng, setLng] = useState("blue");
    const [test, setTest] = useState(false);
    const [carNumber, setCarNumber] = useState(0);
    const [startTime, setstartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [selectedCar, setSelectedCar] = useState(false);
    useEffect(() => {
        axios.get("/usercarid")
        .then((result)=>{
            const usercarid=[]
            result.data.map((item)=>{
                if(item.id === location.state.id){
                    usercarid.push(item.carid)
                }
            })
            setuserofcar(usercarid)
            console.log(usercarid)
        })
        axios.post("/userCars", { "id": `${location.state.id}` })
            .then((result) => {
                const update = []
                setLat("sdşasçd")
                console.log(lat+"dsa")
                result.data.map((item,index) => {
                    if (index === 2) {
                        setLat("ldsşldasş")
                        console.log(lat)
                    }
                    
                    update.push(item)
                })
                setUserCar(update)
                console.log("------")
            })
    }, [])

    const handleCar=(result)=>{
        setTest(true)
        setCarNumber(result)
    }
    const handleSubmit=(event)=>{
        alert("dsa")
        console.log(startTime)
        console.log(endTime)
        console.log(carNumber)
        axios.post("/matchtime",{"startTime":startTime,"endTime":endTime,"carid":carNumber})
        .then((result)=>{
            console.log(result)
            let testArray=[]
            result.data.map((item)=>{
               testArray.push(item)
            })
             setuserTimecar(testArray)
        })
        setSelectedCar(true)
        event.preventDefault()
    }
    const handleExit=()=>{
        let date=new Date();
        axios.post("/timeaddend",{"id":location.state.id,"date":date})
        .then((result)=>{
            console.log(result)
        })
        navigate("/")
    }
    return (
        <>
        <GoogleMap
            defaultZoom={4}
            defaultCenter={{ lat: 59.377871896202215, lng: 18.027288856837686 }}
        >
            {userCar.map((item) => {
                return (
                    <>
                        
                        <Marker onClick={() => setSelected(item)} position={{ lat: parseFloat(item.lat), lng: parseFloat(item.lng) }} />
                    </>
                )
            })}
            {selected && (
                <InfoWindow
                    position={{
                        lat: parseFloat(selected.lat),
                        lng: parseFloat(selected.lng)
                    }}
                    onCloseClick={()=>{
                        setSelected(null)
                    }}
                >
                    <div>
                        <h5>{selected.date}</h5>
                        <h5>carid:{selected.vehicleid}</h5>
                    </div>
                </InfoWindow>
            )}

        </GoogleMap>
        <h4>müşterinin sahip olduğu araçlar</h4>
        {userofcar.map((result)=>{
            return (
                <>
                <button key={result} onClick={()=>handleCar(result)}>{result} carid ye sahip araç</button>
                <br></br>
                </>
            )
        })}
        {test &&
          <div style={{width:"250px",height:"250px",backgroundColor:"gray"}}>
              <h5>lütfen bir zaman aralığı seçiniz</h5>
              <h5>{carNumber} id li araç</h5>
              <form onSubmit={handleSubmit}>
              <label>başlangıç</label>
              <input onChange={(event)=>setstartTime(event.target.value)} type="time" name='start-time' value={startTime}></input>
              <label>bitiş</label>
              <input onChange={(event)=>setEndTime(event.target.value)} type="time" name="end-time" value={endTime}></input>
              <input type="submit"></input>
              </form>
          </div>
        }
        {selectedCar &&
          userTimecar.map((item)=>{
              return(
                  <div>
                      <h4>vehicle id:{item.vehicleid}</h4>
                      <h5>DATE:{item.date}</h5>
                      <h5>LAT:{item.lat}</h5>
                      <h5>LNG:{item.lng}</h5>
                      <h5>-----------------</h5>
                  </div>
              )
          })
        }
        <button onClick={()=>handleExit()}>çıkış yap</button>
        </>
    )
}
const WrappedMap = withScriptjs(withGoogleMap(Map))
function MapCars() {
    return (
        <div>
            <WrappedMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVWQYZhrkEc-PqWwWC5widzpBIdcTpBmw&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}
export default MapCars
/*
{userCar.map(item => {
                //console.log(item)
                    return <Marker onClick={()=>setSelected(item)} key={item.id} defaultTitle={"dsadas"} position={{ lat: parseFloat(item.lat), lng: parseFloat(item.lng) }} />
            })}*/ 