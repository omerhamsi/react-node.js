import axios from 'axios'
import React, { useState } from 'react'
import "./login.css"
import { useNavigate ,useLocation} from "react-router-dom";
function Login() {
   const navigate=useNavigate();
   const location = useLocation();
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [failedNumber,setfailedNumber]=useState(0)
    const handleSubmit=(event)=>{
       if(name===""){
           alert("name gerekli")
           return
       }if(password===""){
           alert("password gerekli")
           return
       }
       axios.post("/login",{"name":name,"password":password})
       .then((result)=>{
           if(result.data ==="failed"){
               if(failedNumber===3){
                   alert("3 kez hatalı giriş gerçekleştirdiniz.")
                   setfailedNumber(0);
               }else{
                 alert("hatalı giriş")
               }
               setfailedNumber(failedNumber+1);
           }
           else{
               let date=new Date();
               alert(date);
               axios.post("/timeadd",{"id":result.data,"date":date})
               .then((result)=>{
                   console.log(result)
               })
               navigate("/map",{state:{id:result.data}});
           }
           //console.log(result)
       }).catch((result)=>{
           console.log(result)
       })
       event.preventDefault();
    }
    return (
        <div className='container'>
            <div className='LoginInput'>
                <form onSubmit={handleSubmit} className='input'>

                    <label style={{marginBottom:"10px"}}>Kullanıcı Adı</label>
                    <input value={name} onChange={(event)=>setName(event.target.value)} style={{marginBottom:"20px"}} type="text" name='name'></input>

                    <label>Parola</label>
                    <input value={password} onChange={(event)=>setPassword(event.target.value)} style={{marginBottom:"10px"}} type="password" name='password'></input>

                    <input type="submit" name='submit'></input>
                </form>
            </div>
        </div>
    )
}
export default Login
