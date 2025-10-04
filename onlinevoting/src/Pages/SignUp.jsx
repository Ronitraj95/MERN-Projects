import React,{useState} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function SignUp() {
    const[data,setData] = useState({voterid:'',name:'',place:'',password:'',c_password:''})
    const[passworderror,setPassworderror]=useState(false)
    const[formfieldserror,setFormfieldserror]=useState(false)
    const[submit,setSubmit ]=useState(false)
        let handleChange = (event)=>{
            event.preventDefault()
            const name = event.target.name
            const value = event.target.value
            setData({...data,[name]:value})
        }
        let handleSubmit = (event)=>{
            event.preventDefault()

            if(data.voterid===''||data.name===''||data.place===''||data.c_password===''||data.password===''){
                setFormfieldserror(true)
            }
            else if (data.password!=data.c_password){
                setPassworderror(true)
            }
            else{
                setSubmit(true)
            }
        }
  return (
    <div style={{paddingBottom:"200px"}}>
      <Navbar/>
            <div style={{borderRadius:"20px",boxShadow:"0px 0px 10px #003366",
                        width:"500px",
                        margin:"auto",
                        marginTop:"50px",
                        padding:"10px",
                        textAlign:"center",
                        color:"#003366"}}>
                                <h2>REGISTER TO VOTE</h2>
                                
                                    <table style={{justifySelf:'center'}}>
                                        <tbody>
                                            <tr>
                                                <td><b>Voter ID : </b></td>
                                                <td><input type='text' name='voterid' style={input1} value={data.voterid} onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td><b>Name : </b></td>
                                                <td><input type='text' name='name' style={input1} value={data.name} onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td><b>Constituency : </b></td>
                                                <td><input type='text' name='place' style={input1} value={data.place} onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td><b>Password : </b></td>
                                                <td><input type='password' name='password' style={input1} value={data.password} onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td><b>Confirm Password : </b></td>
                                                <td><input type='password' name='c_password' style={input1} value={data.c_password} onChange={handleChange}/></td>
                                            </tr>
                                        </tbody>                                        
                                    </table>
                                
                                
                                <br/>
                                <button style={button1} type='submit' onClick={handleSubmit}>REGISTER</button>
                        </div>
                        {passworderror && <h3 style={{color:'red',textAlign:'center'}} >*Password mismatch*</h3>}
                        {formfieldserror && <h3  style={{color:'red',textAlign:'center'}}>*Please fill all the details*</h3>}
                        {submit && <div style={{textAlign:'center'}}><h3 style={{color:'green'}} >Registered successfully</h3>
                            <button style={{height:"40px",width:"200px",borderRadius:"10px",
                                backgroundColor:"#003366",border:"none"}}><Link to='/login' style={{color:"white",textDecoration:"none"}}>LOGIN</Link></button>
                        </div>}
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

export default SignUp
