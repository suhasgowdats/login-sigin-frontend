import React  from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const nav=useNavigate()
  return (
    <div style={{paddingTop:'100px'}}>
        <h1>Dashboard</h1>
        <button onClick={()=>nav('/')}>logout</button>
    </div>
  )
}

export default Dashboard