import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function HomePage() {
    
  return (
    <div style={{paddingBottom: "200px"}}>
      <Navbar/>
      <div style={{display:'flex',margin:'50px',color:'#003366',fontSize:'large',lineHeight:'1.8'}}>
        <div>The Election Commission has announced plans to conduct upcoming elections through an online voting platform. This initiative aims to make voting more accessible, reduce long queues at polling stations, and ensure that every eligible citizen can participate conveniently from anywhere. The system will be equipped with advanced security measures, including multi-factor authentication and encrypted data transfer, to protect the integrity of the vote. Officials believe that moving to an online format will increase voter turnout and streamline the counting process, while maintaining the transparency and fairness of the democratic process.
            <br/><br/>
            Our Online Voting System is designed to transform the way elections are conducted, making the process more accessible, secure, and transparent than ever before. The platform allows registered voters to cast their votes from the comfort of their homes using a secure internet connection, eliminating the need to travel to polling stations. Advanced multi-factor authentication ensures that only legitimate voters can access the system, while state-of-the-art end-to-end encryption guarantees that every vote remains confidential and tamper-proof. The system supports real-time vote counting with instant result generation, drastically reducing manual errors and delays. Designed with responsive technology, it works seamlessly on desktops, laptops, tablets, and smartphones, ensuring voting is possible anytime, anywhere. Comprehensive fraud prevention mechanisms, including IP tracking and biometric verification (if applicable), safeguard the election’s integrity. This innovative approach not only increases voter participation but also reduces costs, saves time, and minimizes environmental impact by cutting down on paper usage.</div>
        <div>
            <img src='https://static.vecteezy.com/system/resources/previews/037/042/743/non_2x/hand-casting-vote-vector.jpg' 
            style={{height:'300px',width:'300px',borderRadius:'40px'}}/>
        </div>
      </div>
      
      <div style={{margin:'50px',color:'#003366',fontSize:'large'}}>
        <h2>Steps to cast your vote</h2>
        <ol type='1'>
            <li>Register as a Voter : Sign up using your valid voter ID and complete identity verification through OTP, biometric scan, or other secure methods.</li>
            <br/>
            <li>Login to the Portal : Use your unique credentials to securely access the online voting platform during the election period.</li>
            <br/>
            <li>Select Your Constituency & Candidate : Browse the list of candidates contesting in your constituency and review their profiles before making your choice.</li>
            <br/>
            <li>Cast Your Vote : Click on your preferred candidate, review your selection, and confirm your vote.</li>
            <br/>
            <li>Receive Confirmation : Get an instant digital receipt or acknowledgment confirming that your vote has been successfully registered.</li>
        </ol>
      </div>

      <div style={{margin:'50px',color:'#003366',fontSize:'large'}}>
        <h2>Security Assurance</h2>
        <p>Our platform is built with multiple layers of security to ensure the integrity and confidentiality of the election:</p>
        <ul>
            <li>End-to-End Encryption: All votes are encrypted from the moment they are cast until they are counted.</li>
            <br/>
            <li>Multi-Factor Authentication: Secure login through voter ID, OTP, and optional biometric verification.</li>
            <br/>
            <li>Fraud Detection Systems: Advanced AI monitors for unusual activity to prevent tampering or duplicate voting.</li>
            <br/>
            <li>Independent Audits: Regular security assessments by certified cybersecurity experts.</li>
            <br/>
            <li>Anonymity Guaranteed: No vote can be traced back to an individual voter.</li>
        </ul>
      </div>

      <div style={{margin:'50px',color:'#003366',fontSize:'large'}}>
            <h2>News & Updates</h2>
            <ul>
                <li>[05 August 2025] – New security patch deployed to enhance system encryption.</li>
                <br/>
                <li>[20 July 2025] – Voter registration deadline extended by 7 days.</li>
                <br/>
                <li>[10 July 2025] – Online voting trial successfully completed in 5 districts.</li>
                <br/>
            </ul>
      </div>

      <div style={{margin:'50px',color:'#003366',fontSize:'large'}}>
            <h2>Announcements</h2>
            <ul>
                <li>State Legislative Assembly Elections – Online voting window: 15 Sept – 18 Sept 2025.</li>
                <br/>
                <li>Local Municipal Elections – Online voting window: 05 Oct – 07 Oct 2025.</li>
                <br/>
                <li>Public Notice: All voters must verify their voter ID and mobile number before 01 Sept 2025 to participate in online voting.</li>
                <br/>
            </ul>
      </div>

      <Footer/>
    </div>
  )
}

export default HomePage
