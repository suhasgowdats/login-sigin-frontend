import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
  const [user, setUser]=useState({
    name:'',
    email:'',
    password:''
  })
  const [signMsg, setSignMsg]=useState('')
  const nav=useNavigate()


  function entyHandel(e){
    setUser({...user,[e.target.name]:e.target.value})
  }
  console.log(user)
  
  async function putData(e){
    e.preventDefault()
    let options={
      url:'https://suhas-login-logout.herokuapp.com/signin',
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      data:user
    }
    let response=await axios(options);
    let rslt=response.data;
    if(rslt==="Signin successfull"){
      setSignMsg("Signin successfull")
      setTimeout(()=>{
        setSignMsg('');
        nav('/')
      },1000)
    }else{
      setSignMsg("User already exist")
    }
  }
  return (
    <div style={{paddingTop:'100px'}}>
      <form onSubmit={putData}>
        <label>Name:</label>
        <input type='text' required="required" onChange={entyHandel} value={user.name} placeholder='Enter your email' name="name" /><br></br><br></br>
        <label>Email:</label>
        <input type='email' required="required" onChange={entyHandel} value={user.email} placeholder='Enter your email' name="email" /><br></br><br></br>
        <label>Password:</label>
        <input type='password' required="required" onChange={entyHandel} value={user.password} placeholder='Enter your password' name="password" /><br></br><br></br>
        <button type='submit'>Submit</button>
      </form>
      <div>
        <p>{signMsg}</p>
      </div>
    </div>
  )
}

export default Signin