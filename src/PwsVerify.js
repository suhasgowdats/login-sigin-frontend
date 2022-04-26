import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function PwsVerify() {
    const[pwscChange, setpwsChange]=useState({
        email:'',
        pws1:'',
        pws2:''
    })
    const [checked,setChecked]=useState(false)
    const [updatemsg, setupdateMsg]=useState('')
    const nav=useNavigate()
    const inputRef1=useRef(null)
    const inputRef2=useRef(null)



    const pwsChangeHandler=(e)=>{
        setpwsChange({...pwscChange,[e.target.name]:e.target.value})
    }
   const pwsSubmitHandel=async(e)=>{
       e.preventDefault()
       if(pwscChange.pws1===pwscChange.pws2){
        let options = {
            url: 'https://suhas-login-logout.herokuapp.com/pwsverification',
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            data: pwscChange
        }
        let ress = await axios(options)
        let update=ress.data
        if(update==="Passwoerd updated successfully"){
            setupdateMsg(update);
            setTimeout(()=>{
                nav('/')
            },1000)
        }else{
            setupdateMsg(update);
            setTimeout(()=>{
                setupdateMsg('')
            },3000)
        }
       }else{
           setupdateMsg('Both password doesnt match')
           setTimeout(()=>{
               setupdateMsg('')
           },4000)
       }
   }

   const showPassword=()=>{
       if(checked==false){
           setChecked(true)
           inputRef1.current.type='text'
           inputRef2.current.type='text'
       }else{
           setChecked(false);
           inputRef1.current.type='password'
           inputRef2.current.type='password'
       }
   }



  return (
    <div style={{paddingTop:'100px'}}>
        <form onSubmit={pwsSubmitHandel}>
            <label>Email:</label>
            <input type='email' required='required' name='email'value={pwscChange.email} placeholder='Enter email' onChange={pwsChangeHandler}/><br></br><br></br>
            <label>Enter new Password:</label>
            <input type='password' required='required' name='pws1' value={pwscChange.pws1}  onChange={pwsChangeHandler} ref={inputRef1}/><br></br>
            <label>Confirm Password:</label>
            <input type='password' required='required' name='pws2' value={pwscChange.pws2}  onChange={pwsChangeHandler} ref={inputRef2}/><br></br>
            <input type='checkbox' onChange={showPassword} lchecked={checked}/><label>Show Password</label><br></br><br></br>
            <button type='submit'>Submit</button>
        </form>
        <div>
            <p>{updatemsg}</p>
        </div>
    </div>
  )
}

export default PwsVerify