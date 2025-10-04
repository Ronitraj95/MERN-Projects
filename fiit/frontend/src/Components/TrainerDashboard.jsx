import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TrainerDashboard.css";
import { useNavigate } from 'react-router-dom';

// const sampleUsers = [
//   { _id: "1", name: "Alice", email: "alice@example.com", goals: ["Fat Loss"] },
//   { _id: "2", name: "Bob", email: "bob@example.com", goals: ["Muscle Gain"] },
//   { _id: "3", name: "Charlie", email: "charlie@example.com", goals: ["Endurance", "Mobility"] },
// ];

const TrainerDashboard = () => {
  const [suggestions, setSuggestions] = useState({});
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };


    useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5090/api/trainer/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUsers(res.data);
      } catch (err) {
        console.error('Failed to fetch users:', err);
      }
    };

    fetchUsers();
  }, []);



  const sendSuggestionTouser = async (userId) => {
  const { workout, diet } = suggestions[userId] || {};
  if (!workout || !diet) return alert("Please fill in both workout and diet.");

  try {
    await axios.post('http://localhost:5090/api/trainer/send-plan', {
      userId,
      workout,
      diet
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    alert('Plan sent successfully!');
  } catch (err) {
    console.error(err);
    alert('Failed to send plan');
  }
};

  const handleChange = (userId, field, value) => {
    setSuggestions((prev) => ({
      ...prev,
      [userId]: {
        ...prev[userId],
        [field]: value,
      },
    }));
  };

  const sendSuggestion = async (userId) => {
    const { workout, diet } = suggestions[userId] || {};
    try {
    await axios.post('http://localhost:5090/api/trainer/send-plan', {
      userId,
      workout,
      diet
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    alert('Plan saved and email sent!');
  } catch (err) {
    console.error(err);
    alert('Failed to send plan');
  }
};

const deleteUser = async (userId) => {
  if (!window.confirm("Are you sure you want to delete this user?")) return;

  try {
    await axios.delete(`http://localhost:5090/api/trainer/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    alert("User deleted successfully");
  } catch (err) {
    console.error("Failed to delete user:", err);
    alert("Error deleting user");
  }
};



  return (
    <div className="trainer-dashboard-container">
      <h1 className="trainer-dashboard-title">🗿Trainer Dashboard</h1>
      <button className="Trainer-home-button" onClick={goToHome}> Home </button>
      <div className="trainer-user-grid">
        {users.map((user) => (
          <div className="trainer-user-card" key={user._id}>
            <h3 className="trainer-user-name">👤 {user.name}</h3>
            <p className="trainer-user-info">📧 {user.email}</p>
            <p className="trainer-user-info">🎯 Goals: {user.goals.join(", ")}</p>

            <textarea
              className="trainer-textarea"
              placeholder="🏋️ Workout Plan"
              value={suggestions[user._id]?.workout || ""}
              onChange={(e) => handleChange(user._id, "workout", e.target.value)}
            />
            <textarea
              className="trainer-textarea"
              placeholder="🥗 Diet Plan"
              value={suggestions[user._id]?.diet || ""}
              onChange={(e) => handleChange(user._id, "diet", e.target.value)}
            />

            <button className="trainer-submit-btn" onClick={() => sendSuggestion(user._id)}>Send Plan </button>
             <button className="Trainer-del-btn" onClick={() => deleteUser(user._id)}>Delete User</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerDashboard;
