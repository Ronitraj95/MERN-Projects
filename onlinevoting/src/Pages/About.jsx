import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function About() {
  return (
    <div>
      <Navbar/>
      <div style={{color:"#003366",margin:"50px",fontSize:"large",paddingBottom: "200px"}}>
            
                <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/postal-ballot-vote-counting-220406171-16x9.jpg?VersionId=cgLPs0i4M6gxY2pXvzJNOOQ9HXiL99X3&size=690:388'
                style={{height:"250px",width:"400px",borderRadius:"10px",marginLeft:"20px"}}/>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0DPZsNg6sHrqh97L6MxCDm1ek35bjFz4xQ&s'
                style={{height:"250px",width:"400px",borderRadius:"10px",marginLeft:"20px"}}/>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XuaXfr8MuRlyD6zqHJ6ktkuhRcRuMw4XVA&s'
                
                style={{height:"250px",width:"400px",borderRadius:"10px",marginLeft:"20px"}}/>

           
            
            <h2>Introduction</h2>
            <p>The Online Voting System is an innovative digital platform developed to modernize and simplify the electoral process. Created under the guidance of the Election Commission, it enables eligible citizens to cast their votes securely from anywhere, eliminating the need to visit traditional polling stations. Our mission is to make voting more accessible, transparent, and efficient while ensuring the highest standards of security and trust.</p>
            
            <h2>Our Vision</h2>
            <p>We envision a future where every eligible voter can participate in elections without barriers of distance, time, or accessibility. By embracing cutting-edge technology, we aim to strengthen democracy, increase voter turnout, and promote fair representation for all citizens.</p>
            
            <h2>Our Mission</h2>
            <ul>
                <li>To provide a secure and user-friendly platform for online voting.</li>
                <li>To ensure complete voter anonymity and maintain the integrity of the electoral process.</li>
                <li>To increase voter participation by making voting possible from anywhere in the world.</li>
                <li>To reduce costs and environmental impact associated with traditional paper-based elections.</li>
            </ul>
            
            <h2>Key Features</h2>
            <p>Our Online Voting System is designed to transform the way elections are conducted, making the process more accessible, secure, and transparent than ever before. The platform allows registered voters to cast their votes from the comfort of their homes using a secure internet connection, eliminating the need to travel to polling stations. Advanced multi-factor authentication ensures that only legitimate voters can access the system, while state-of-the-art end-to-end encryption guarantees that every vote remains confidential and tamper-proof. The system supports real-time vote counting with instant result generation, drastically reducing manual errors and delays. Designed with responsive technology, it works seamlessly on desktops, laptops, tablets, and smartphones, ensuring voting is possible anytime, anywhere. Comprehensive fraud prevention mechanisms, including IP tracking and biometric verification (if applicable), safeguard the election’s integrity. This innovative approach not only increases voter participation but also reduces costs, saves time, and minimizes environmental impact by cutting down on paper usage.</p>
            
            <h2>Security Commitments</h2>
            <p>We understand that trust is the foundation of any democratic system. That’s why our platform incorporates military-grade encryption, secure data storage, and continuous system audits to ensure zero compromise on data integrity. Every vote is confidential, and the system is regularly tested for vulnerabilities by independent cybersecurity experts.</p>
            
            <h2>Contact Us</h2>
            <p>HelpLine: 1800-123-4567 | Email: support@eci.gov.in  |
            Office Address: Nirvachan Sadan, Ashoka Road, New Delhi – 110001</p>
      </div>
      <Footer/>
    </div>
  )
}

export default About
