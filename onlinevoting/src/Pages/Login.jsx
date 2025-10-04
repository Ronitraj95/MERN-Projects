import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Login() {
    const[logindata,setLogindata] = useState({voterid:'',password:''})
    const[formfieldserror,setFormfieldserror]=useState(false)
    const[submit,setSubmit ]=useState(false)
    let handleChange = (event)=>{
        event.preventDefault()
        const name = event.target.name
        const value = event.target.value
        setLogindata({...logindata,[name]:value})
    }
    let handleSubmit = (event)=>{
        event.preventDefault()
        if(logindata.voterid===''||logindata.password===''){
            setFormfieldserror(true)
        }
        else{
            setSubmit(true)
        }
    }
  return (
    <div style={{paddingBottom:"200px"}}>
        <Navbar/>
            <div style={{borderRadius:"20px",boxShadow:"0px 0px 10px #003366",
            width:"400px",
            margin:"auto",
            marginTop:"40px",
            padding:"10px",
            textAlign:"center",
            color:"#003366"}}>
                    <h2>LOGIN TO VOTE</h2>
                    
                        <table style={{justifySelf:'center'}}>
                            <tr>
                                <td><b>Voter ID : </b></td>
                                <td><input type='text' name='voterid' style={input1} value={logindata.voterid} onChange={handleChange}/></td>
                            </tr>
                            <br/>
                            <tr>
                                <td><b>Password : </b></td>
                                <td><input type='password' name='password' style={input1} value={logindata.password} onChange={handleChange}/></td>
                            </tr>
                        </table>
                    
                    
                    <br/>
                    <button style={button1} type='submit' onClick={handleSubmit}>LOGIN</button>

                    <p>Not yet registered ? <Link to='/signup'>Register now</Link></p>
            </div>
            {formfieldserror && <h3  style={{color:'red',textAlign:'center'}}>*Please fill all the details*</h3>}
            {submit && <div style={{textAlign:'center'}}><h3 style={{color:'green'}} >Login successfull</h3>
            <button style={{height:"40px",width:"200px",borderRadius:"10px",
                    backgroundColor:"#003366",border:"none"}}>
                        <Link to='/castvote' style={{color:"white",textDecoration:"none"}}>CAST VOTE</Link>
                        
            </button></div>}
        <Footer/>
    </div>
  )
}
let button1 = {
    height:"30px",width:"100px",borderRadius:"10px",backgroundColor:"#003366",color:"white",border:"none"
};
let input1 = {
    height:"30px",width:"300px",borderRadius:"10px",border:"1px solid #003366"
}

export default Login
