import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{backgroundColor:"#003366",color:"white",display:'flex',justifyContent:"space-around",alignItems:"center",margin:"-10px"}}>
        <div>
            <h1>ELECTION COMMISION OF INDIA</h1>
            <p style={{fontSize:"large",fontStyle:"oblique"}}>Cast Your Vote Online - Safe, Secure, and Easy</p>
        </div>
        <div style={{display:"flex",justifyContent:'space-evenly',width:"900px"}}>
            <h3> <Link to='/' style={{color:"white",textDecoration:"none"}}>HOME</Link></h3>
            <h3><Link to='/about' style={{color:"white",textDecoration:"none"}}>ABOUT</Link></h3>
            <h3><Link to='/votinglines' style={{color:"white",textDecoration:"none"}}>VOTING LINES</Link></h3>
            <h3><Link to='/nominees' style={{color:"white",textDecoration:"none"}}>NOMINEES</Link></h3>
            <h3><Link to='/results' style={{color:"white",textDecoration:"none"}}>RESULTS</Link></h3>
            <h3><Link to='/login' style={{color:"white",textDecoration:"none"}}>LOGIN</Link></h3>
        </div>
        
    </div>
  )
}

export default Navbar
