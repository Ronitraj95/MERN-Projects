import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Nominees() {

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

        <div style={{display:'flex'}}>
            {candidates.map((ele,index)=>{
              return (
                <div style={{borderRadius:"20px",
                      boxShadow:"0px 0px 10px #003366",
                      width:"300px",
                      height:"300px",
                      margin:"auto",
                      marginTop:"50px",
                      padding:"20px",
                      textAlign:"center",
                      color:"#003366"}}>
                    <img src={ele.image}/>
                    <h1>Candidate Name : {ele.candidateName}</h1>
                    <h3>Candidate Number : {ele.candidateNumber}</h3>
                    <h3>Party Name : {ele.partyName}</h3>
                </div>
              );
                
            })}

        </div>

      <Footer/>
    </div>
  )
}

export default Nominees
