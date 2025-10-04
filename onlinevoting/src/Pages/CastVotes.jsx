import React, { useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { votingContext } from './Voting'
import { rescontext } from './Resultcandidate'

function CastVotes() {
  const navigate = useNavigate()
    let {votinglines,setVotinglines} = useContext(votingContext)
    console.log(votinglines)
    const {results,setResults} = useContext(rescontext)
    
    let handlechange = (event)=>{
        event.preventDefault()
        setResults(event.target.value)
    }
    let handleres = ()=>{
        if(results!=null){
            alert("VOTE SUBMITTED")
            navigate('/results')
        }
        else{
          alert("CANDIDATE NOT SELECTED TO VOTE")
        }
        
    }
    const candidates = [
  {
    serialNumber: 1,
    candidateName: "Aarav Sharma",
    partyName: "Progressive Alliance",
    candidateNumber: 101,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    serialNumber: 2,
    candidateName: "Priya Singh",
    partyName: "Unity Front",
    candidateNumber: 102,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    serialNumber: 3,
    candidateName: "Vikram Patel",
    partyName: "People's Choice",
    candidateNumber: 103,
    image: "https://randomuser.me/api/portraits/men/76.jpg"
  },
  {
    serialNumber: 4,
    candidateName: "Neha Reddy",
    partyName: "National Congress",
    candidateNumber: 104,
    image: "https://randomuser.me/api/portraits/women/55.jpg"
  }
];

  
  return (
    <div>
      <Navbar/>
            {votinglines && 
              <div style={{borderRadius:"20px",
            boxShadow:"0px 0px 10px #003366",
            width:"650px",
            height:"300px",
            margin:"auto",
            marginTop:"50px",
            padding:"20px",
            textAlign:"center",
            color:"#003366"}}> 
                  <table >
                    <thead style={{padding:"10px",marginTop:"10px"}}>
                      <tr>
                        <th style={{padding:"10px"}}>Sl.No</th>
                        <th style={{padding:"10px"}}>Candidate Name</th>
                        <th style={{padding:"10px"}}>Party Name</th>
                        <th style={{padding:"10px"}}>Candidate number</th>
                        <th style={{padding:"10px"}}>Cast your vote</th>
                      </tr>
                    </thead>
                    <tbody >
                          {candidates.map((ele,index)=>{
                              return <tr key={index} >
                                <td style={{padding:"10px"}}>{ele.serialNumber}</td>
                                <td>{ele.candidateName}</td>
                                <td>{ele.partyName}</td>
                                <td>{ele.candidateNumber}</td>
                                <td><input type='radio' name="candidate" value={ele.candidateName} onChange={handlechange}/></td>
                              </tr>
                          })}
                              
                    </tbody>
                    
                  </table>

                  <button style={button1} onClick={handleres}>Submit Vote</button>
              </div>
            }
            {!votinglines && 
              <div style={{borderRadius:"20px",
            boxShadow:"0px 0px 10px #003366",
            width:"500px",
            height:"200px",
            margin:"auto",
            marginTop:"50px",
            padding:"10px",
            textAlign:"center",
            color:"#003366"}}>
                <h1>VOTING LINES ARE CLOSED!!!</h1>
                <button style={button1} ><Link to={'/results'} style={{textDecoration:"none",color:"white",fontSize:"large"}}>View Results</Link></button>
              </div>
             }

             
      <Footer/>
    </div>
  )
}

let button1 = {
    height:"40px",width:"300px",borderRadius:"10px",backgroundColor:"#003366",color:"white",border:"none",marginTop:"10px"
};
export default CastVotes
