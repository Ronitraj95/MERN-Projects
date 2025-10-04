import React from 'react'

function Footer() {
  let darkblue = "#001f3f"
  return (
    <div style={{backgroundColor:darkblue,color:"white",marginLeft:"-10px",marginRight:"-10px",marginTop:"30px",bottom:"0",zIndex:"1000",position:"fixed",left:"0",right:"0"}}>
      
      <div style={{margin:"10px",textAlign:"center"}}>
        <h3>© 2025 Election Commission of India. All Rights Reserved.</h3>
        <p>This online voting portal is developed and maintained by the Election Commission to facilitate secure and accessible voting for eligible citizens. 
            Your vote is confidential and protected by advanced encryption technologies.</p>
        <p>Help Desk: 1800-123-4567 | Email: support@eci.gov.in  |
            Office Address: Nirvachan Sadan, Ashoka Road, New Delhi – 110001</p>
        <p>Terms & Conditions | Privacy Policy | Accessibility Statement</p>
      </div>
      
    </div>
  )
}

export default Footer
