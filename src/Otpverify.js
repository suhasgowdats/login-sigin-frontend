import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Otpverify() {
    const [verify, setVerify] = useState({
        email: '',
        otp: ''
    });
    const [optmsg, setoptMsg] = useState('')
    const nav = useNavigate()


    function changeverify(e) {
        setVerify({ ...verify, [e.target.name]: e.target.value })
    }

    async function verifySubmit(e) {
        e.preventDefault()
        let options = {
            url: 'https://git.heroku.com/suhas-login-logout.git/optverification',
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            data: verify
        }
        let ress = await axios(options)
        let outmsg = ress.data;
        if (outmsg === 'OTP verification successfull') {
            setoptMsg(outmsg);
            nav('/pwsverify')
        } else {
            setoptMsg(outmsg);
            setTimeout(() => {
                setoptMsg('')
            }, 3000)
        }

    }


    return (
        <div style={{paddingTop:'100px'}}>
            <form onSubmit={verifySubmit}>
                <label>Email:</label>
                <input type='email' required="required" onChange={changeverify} placeholder='Enter your email' name="email" /><br></br><br></br>
                <label>Otp:</label>
                <input type='text' required="required" onChange={changeverify} placeholder='Enter your password' name="otp" /><br></br><br></br>
                <button type='submit'>Submit</button>
            </form>
            <div>
                <p>{optmsg}</p>
            </div>
        </div>
    )
}

export default Otpverify