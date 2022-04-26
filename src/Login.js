import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'

function Login() {
  const [detail, setDetail]=useState({
    email:"",
    password:""
  })  
  const [msg,setMsg]=useState(null)
  const Nav=useNavigate()

  function changeHandler(e){
    setDetail({...detail,[e.target.name]:e.target.value})
  }

    async function logHandel (e){
      e.preventDefault()
      let options={
        url:'https://suhas-login-logout.herokuapp.com/login',
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        data:detail
      }
      let result= await axios(options)
      let res=result.data
      console.log(result.data)
     
      if(res==="logIn successfull"){
           setDetail({
             email:'',
             password:''
           })
           Nav('/dashboard')
      }else if(res==="Please enter correct passsword"){
        setMsg("Please enter correct passsword")
      }else{
        setMsg("Email not registered, please signin")
      }
      
    setTimeout(()=>{
      setMsg(null)
    },3000)
    }
  return (
    <div className='logindiv'>
        <form onSubmit={logHandel}>
            <label>Email :</label><span> </span>
            <input type='email' required="required" onChange={changeHandler} value={detail.email} placeholder='Enter your email' name="email" /><br></br><br></br>
            <label>Password :</label><span> </span>
            <input type='password' required="required" onChange={changeHandler}  value={detail.password} placeholder='Enter your password' name="password"/><br></br><br></br>
            <button type='submit'>Submit</button>
        </form>
        <div>
          <p>{msg}</p>
        </div>
        <NavLink to='/forgotpass'>Forgot password</NavLink><br></br><br></br>
        <NavLink to={"/signin"}><button>Signin</button></NavLink>
    </div>
  )
}

export default Login