import React, { useState,useEffect } from "react";
import axios from 'axios';
import "./AdminDashboard.css";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useNavigate } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend, Filler);

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  // const [users, setUsers] = useState([
  //   { _id: "u1", name: "Alice", email: "alice@example.com", role: "user" },
  //   { _id: "u2", name: "Bob", email: "bob@example.com", role: "user" },
  // ]);
  // const [trainers, setTrainers] = useState([
  //   { _id: "t1", name: "Trainer Tom", email: "tom@fit.com", role: "trainer" },
  //   { _id: "t2", name: "Coach Kim", email: "kim@fit.com", role: "trainer" },
  // ]);

    useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get('http://localhost:5090/api/trainer/admin/all', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUsers(res.data.users);
        setTrainers(res.data.trainers);
      } catch (err) {
        console.error('Failed to load admin data:', err);
      }
    };

    fetchAll();
  }, []);




  const handleDelete = async (type, id) => {
  if (!window.confirm(`Are you sure you want to delete this ${type}?`)) return;

  try {
    await axios.delete(`http://localhost:5090/api/trainer/user/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (type === "user") setUsers(users.filter((u) => u._id !== id));
    else setTrainers(trainers.filter((t) => t._id !== id));
  } catch (err) {
    console.error("Delete failed:", err);
    alert("Delete failed");
  }
};

  const lineData  = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Active Users",
        data: [2, 4, 6, 5, 8],
        fill: true,
        backgroundColor: "rgba(96, 165, 250, 0.2)",
        borderColor: "#60a5fa",
        tension: 0.4,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#60a5fa",
        pointHoverRadius: 6,
        pointRadius: 4,
      },
    ],
  };

  const doughnutData = {
    labels: ["Users", "Trainers"],
    datasets: [
      {
        label: "Count",
        data: [users.length, trainers.length],
        backgroundColor: ["red", "white"],
        hoverBackgroundColor: ["#f87171", "#f3f4f6"],
        borderColor: ["black", "black"],
        borderWidth: 2,
        hoverOffset: 12,
      },
    ],
  };

  return (
    <div className="adminDash_root">
    <div>
      <h1 className="adminDash_title">🛠️ Admin Dashboard</h1>
      <button className="admin-home-button" onClick={goToHome}>Home </button>
    </div>
      <div className="adminDash_charts">
        <div className="adminDash_chartCard">
          <h3>📈 User Growth</h3>
          <Line data={lineData} />
        </div>
        <div className="adminDash_chartCard">
          <h3>📊 User vs Trainer Distribution</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>

      <div className="adminDash_section">
        <h2 className="adminDash_sectionTitle">👥 Users</h2>
        <div className="adminDash_cardGrid">
          {users.map((user) => (
            <div className="adminDash_card" key={user._id}>
              <h3 className="adminDash_cardTitle">{user.name}</h3>
              <p className="adminDash_cardText">{user.email}</p>
              <button className="adminDash_cardButton" onClick={() => handleDelete("user", user._id)}>
                🗑 Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="adminDash_section">
        <h2 className="adminDash_sectionTitle">🏋️‍♂️ Trainers</h2>
        <div className="adminDash_cardGrid">
          {trainers.map((trainer) => (
            <div className="adminDash_card" key={trainer._id}>
              <h3 className="adminDash_cardTitle">{trainer.name}</h3>
              <p className="adminDash_cardText">{trainer.email}</p>
              <button className="adminDash_cardButton" onClick={() => handleDelete("trainer", trainer._id)}>
                🗑 Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
