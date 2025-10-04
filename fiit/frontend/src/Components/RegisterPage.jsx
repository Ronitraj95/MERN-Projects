import React, { useState } from 'react';
import '../App.css';
import registerBg from '../assets/register-bg.jpeg';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');



  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (password !== confirm) {
      return setError("Passwords do not match");
    }

    try {
      const res = await fetch('http://localhost:5090/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          role,
          name,
          dob,
          email,
          age,
          height,
          weight,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Sending registration data:", {
  name,
  role,
  dob,
  email,
  password,
});
        alert("Registration successful!!!!!!");
        navigate('/login');
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="page" style={{ backgroundImage: `url(${registerBg})` }}>
      {/* <div className="header">
        <span>FREAK OUT!!!!!!!</span>
      </div> */}
      <div className="form-container">
        <h3>New User</h3>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <select className="Role-Dropdown" value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="trainer">Trainer</option>
      </select>
        <input className="hello" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <input className="hello" type="email" placeholder="Email ID" value={email} onChange={(e) => setEmail(e.target.value)} /><br />

        <div className="input-row">
        <input className="hello" type="date" placeholder="DOB" value={dob} onChange={(e) => setDob(e.target.value)} /><br />      
        <input className="hello" type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br />
        </div>

        <div className="input-row">
        <input className="hello" type="number" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} /><br />
        <input className="hello" type="number" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} /><br />
        </div>
        
        <input className="hello" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <input className="hello" type="password" placeholder="Confirm Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} /><br />
        <button className="Sub" onClick={handleRegister}>Submit</button>
      </div>
    </div>
  );
}

export default RegisterPage;
