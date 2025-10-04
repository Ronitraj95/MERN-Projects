import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link, useLocation } from 'react-router-dom'
import { votingContext } from './Voting'
import { rescontext } from './Resultcandidate'

function Results() {
  
  let {votinglines,setVotinglines} = useContext(votingContext)
  let {results,setResults} = useContext(rescontext)
  const winner = results
  let message = ""

 
  if(!votinglines && winner){
    message = `WINNER IS ${winner}`
  }
  else if(votinglines && winner){
    message = "VOTING IS STILL GOING ON RESULTS ARE YET TO BE ANNOUNCED"
  }
  else if(votinglines && !winner){
    message="VOTING IS STILL GOING ON RESULTS ARE YET TO BE ANNOUNCED"
  }
  else if(!votinglines && !winner){
    message = "VOTING IS STILL GOING ON RESULTS ARE YET TO BE ANNOUNCED"
  }
  return (
    <div tyle={{paddingBottom:"200px"}}>
      <Navbar/>
          <div style={{borderRadius:"20px",
            boxShadow:"0px 0px 10px #003366",
            width:"500px",
            height:"200px",
            margin:"auto",
            marginTop:"50px",
            padding:"10px",
            textAlign:"center",
            color:"#003366"}}>
              <h1>{message}</h1>

              {(votinglines && !winner) &&
                <div>
                  <button style={button1}><Link to='/login' style={{textDecoration:"none",
                    fontSize:"large",color:"white"}}>CAST YOUR VOTE</Link></button>
                </div>
              }
          </div>
      <Footer/>
    </div>
  )

 
}

 let button1 = {
    height:"40px",width:"300px",borderRadius:"10px",backgroundColor:"#003366",color:"white",border:"none"
  };
export default Results
