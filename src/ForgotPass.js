import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ForgotPass() {
    const [email, setEmail]=useState('')
    const [notemsg, setnoteMsg]=useState('')
    const nav=useNavigate()



   const emailHandel=(e)=>{
       setEmail({email:e.target.value})
   }


   const sendOtp= async(e)=>{
       e.preventDefault()
       let options={
        url:'https://git.heroku.com/suhas-login-logout.git/emailverification',
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        data:email
      }
      let result=await axios(options)
      let note=result.data
      console.log(note)
      if(note==="OPT send"){
        setnoteMsg(note)
        setTimeout(()=>{
            nav('/otpverification')
        },1000)          
      }else{
          setnoteMsg(note)
          setTimeout(()=>{
            setnoteMsg('')
        },3000)          
      }
   }

  return (
    <div style={{paddingTop:'100px'}}>
        <form onSubmit={sendOtp}>
        <label>Email:</label>
        <input type='email' placeholder='Enter your email' required="required" onChange={emailHandel} /><br></br><br></br>
        <button type='submit'>Get otp</button>
        </form>
        <div>
            <p>{notemsg}</p>
            <button onClick={()=>nav('/signin')}>Back</button>
        </div>
    </div>
  )
}

export default ForgotPass