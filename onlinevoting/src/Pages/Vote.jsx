import React,{ useContext} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { votingContext } from './Voting'


function Vote() {
    const{votinglines,setVotinglines} = useContext(votingContext)
    let openlines = ()=>{
        setVotinglines(true)
    }
    let closelines = ()=>{
        setVotinglines(false)
    }
  return (
    <div style={{paddingBottom: "200px"}}>
        <Navbar/>

        <div style={{borderRadius:"20px",
            boxShadow:"0px 0px 10px #003366",
            width:"400px",
            height:"200px",
            margin:"auto",
            marginTop:"50px",
            padding:"10px",
            textAlign:"center",
            color:"#003366"
        }}>
            <br/>
            <h2 style={{margin:"10px"}}>VOTING LINES ARE {votinglines ? "OPEN":"CLOSED"} !!!</h2>
            <br/><br/>
            <div style={{
                display:'flex',justifyContent:'space-evenly',alignItems:"center"
            }}>
                <button style={button1} onClick={openlines}>OPEN</button>
                <button style={button1} onClick={closelines}>CLOSE</button>
            </div>
      </div>
            



        <Footer/>
    </div>
  )
}
const button1 = {
    height:"30px",width:"100px",borderRadius:"10px",backgroundColor:"#003366",color:"white",border:"none"
};

export default Vote
