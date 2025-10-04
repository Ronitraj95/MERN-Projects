import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import profileImage from '../assets/Profile.JPG';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [latestPlan, setLatestPlan] = useState(null);
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [hasUnreadPlan, setHasUnreadPlan] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [userName, setUsername] = useState("Guest");
  const [userAge, setUserAge] = useState(0);
  const [userHeight, setUserHeight] = useState(0);
  const [userWeight, setUserWeight] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) return navigate('/login');

      try {
        const res = await fetch('http://localhost:5090/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error('Failed to fetch user data');

        const data = await res.json();

        setUsername(data.name || 'Guest');
        setUserAge(data.age ?? 0);
        setUserHeight(data.height ?? 0);
        setUserWeight(data.weight ?? 0);

      } catch (err) {
        console.error(err);
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  useEffect(() => {
    const fetchLatestPlan = async () => {
      try {
        const res = await fetch('http://localhost:5090/api/trainer/latest-plan', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!res.ok) throw new Error('Failed to fetch plan');

        const data = await res.json();

        if (!latestPlan || latestPlan._id !== data._id) {
          setLatestPlan(data);
          setHasUnreadPlan(true);
        }
      } catch (err) {
        console.error(err);
        alert('Could not fetch latest plan');
      }
    };
    fetchLatestPlan();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="dashboard-main">
      <div className="dashboard-container">
        <h1 className="dashboard-title">Welcome {userName} 🎉</h1>
        <div className="notification-wrapper">
          <button className="notification-bell" onClick={() => {
            setNotificationsVisible((prev) => !prev);
            setHasUnreadPlan(false);
          }}>
            🔔
            {hasUnreadPlan && <span className="notification-dot"></span>}
          </button>

          {notificationsVisible && latestPlan && (
            <div className="plan-popup">
              <h3>📅 Latest Plan</h3>
              <p>🏋 {latestPlan.workout}</p>
              <p>🥗 {latestPlan.diet}</p>
              <small>🕒 {new Date(latestPlan.createdAt).toLocaleString()}</small>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <button className="nav-button" onClick={() => navigate('/goal', {
            state: { age: userAge, height: userHeight, weight: userWeight },
          })}>🏃 BMI-Generation </button>
          <button className="nav-button" onClick={() => navigate('/tracker')}>🙋 Calorie-Tracker </button>
          <button className="nav-button" onClick={() => navigate('/weight-tracker')}>🏋 Weight-tracker</button>
          <button className="nav-button" onClick={() => navigate('/food')}>🍽 Food Tracker</button>
          <button className="nav-button" onClick={() => navigate('/challenge')}>🏆 Challenges</button>
        </div>

        <div className="card-grid">
          <Card label="Steps" value="2,500 Steps" subtext="50% of your goal" />
          <Card label="Water" value="1.25 Liters" subtext="Daily intake" />
          <Card label="Calories" value="Under" subtext="Today" />
          <Card label="Heart Rate" value="110 bpm" subtext="Current" />
        </div>

        <div className="chart-grid">
          <ChartCard title="Weekly Activity">
            <Bar
              data={{
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                  label: 'Steps',
                  data: [3000, 4000, 3500, 5000, 7500, 2000, 1000],
                  backgroundColor: '#4F46E5',
                }],
              }}
              options={{
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } },
                maintainAspectRatio: false,
              }}
            />
          </ChartCard>

          <ChartCard title="Workout Breakdown">
            <Doughnut
              data={{
                labels: ['Cardio', 'Stretching', 'Treadmill', 'Strength'],
                datasets: [{
                  data: [30, 40, 30, 20],
                  backgroundColor: ['#6366F1', '#10B981', '#F59E0B', '#EF4444'],
                }],
              }}
              options={{ plugins: { legend: { position: 'bottom' } }, maintainAspectRatio: false }}
            />
          </ChartCard>

          <ChartCard title="Muscle Group Breakdown">
            <Doughnut
              data={{
                labels: ['Chest', 'Back', 'Legs', 'Arms', 'Shoulders'],
                datasets: [{
                  data: [20, 25, 30, 15, 10],
                  backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#66bb6a', '#ab47bc'],
                }],
              }}
              options={{ plugins: { legend: { position: 'bottom' } }, maintainAspectRatio: false }}
            />
          </ChartCard>
        </div>

        <div className="goals-grid">
          <div className="goal-card">
            <h2 className="chart-title">Your Goals</h2>
            <Goal label="Running" value={79} />
            <Goal label="Sleeping" value={60} />
            <Goal label="Weight Loss" value={60} />
          </div>

          <div className="goal-progress">
            <h2 className="chart-title">Monthly Progress</h2>
            <p className="progress-percentage">80%</p>
            <p className="progress-note">You have achieved 80% of your goal this month</p>
          </div>
        </div>
      </div>

      <div className="profile-sidebar-wrapper">
        <div className="profile-sidebar">
          <div className="profile-card">
            <img src={profileImage} alt="Profile" className="profile-pic" />
            <h3 className="profile-name" style={{ marginBottom: '1rem' }}>{userName}</h3>
            <div className="profile-info-row">
              <div className="info-box">Age {userAge} Yrs</div>
              <div className="info-box">Height {userHeight} cm</div>
              <div className="info-box">Weight {userWeight} kg</div>
            </div>

            <div className="profile-button-grid">
              <button className="profile-nav-button" onClick={() => navigate('/workout')}>🏋 Workout</button>
              <button className="profile-nav-button" onClick={() => navigate('/diet')}>🥗 Diet</button>
              <button className="profile-nav-button" onClick={() => setShowEditModal(true)}>✏ Edit</button>
              <button className="profile-nav-button" onClick={() => setShowLogoutConfirm(true)}>🚪 Logout</button>
            </div>

          </div>
          <div className="profile-section">
            <h4 className="section-title">Your Goals</h4>
            <ul className="section-list">
              <li>🏃 Run 3x/week</li>
              <li>💧 3L water/day</li>
              <li>🍎 1800 kcal diet</li>
            </ul>
          </div>

          <div className="profile-section">
            <h4 className="section-title">Scheduled Activities</h4>
            <ul className="section-list">
              <li>🧘 Yoga - 7 AM</li>
              <li>🏋 Gym - 6 PM</li>
              <li>🚴 Cycling - Sunday</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ✅ Updated Edit Profile Modal */}
      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Profile</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  const token = localStorage.getItem('token');
                  const res = await fetch('http://localhost:5090/api/auth/update-profile', {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                      name: userName,
                      age: userAge,
                      height: userHeight,
                      weight: userWeight,
                    }),
                  });

                  if (!res.ok) throw new Error('Failed to update profile');

                  alert('Profile updated successfully!');
                  setShowEditModal(false);
                } catch (err) {
                  console.error(err);
                  alert('Error updating profile');
                }
              }}
            >
              <label>
                Name:
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
              <label>
                Age:
                <input
                  type="number"
                  value={userAge}
                  onChange={(e) => setUserAge(Number(e.target.value))}
                  required
                />
              </label>
              <label>
                Height (cm):
                <input
                  type="number"
                  value={userHeight}
                  onChange={(e) => setUserHeight(Number(e.target.value))}
                  required
                />
              </label>
              <label>
                Weight (kg):
                <input
                  type="number"
                  value={userWeight}
                  onChange={(e) => setUserWeight(Number(e.target.value))}
                  required
                />
              </label>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="submit" className="confirm-btn">Save</button>
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="close-btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showLogoutConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Are you sure you want to logout?</h2>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
              <button onClick={handleLogout} className="confirm-btn">Yes, Logout</button>
              <button onClick={() => setShowLogoutConfirm(false)} className="close-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Card = ({ label, value, subtext }) => (
  <div className="info-card">
    <div className="info-label">{label}</div>
    <div className="info-value">{value}</div>
    <div className="info-subtext">{subtext}</div>
  </div>
);

const Goal = ({ label, value }) => (
  <div className="goal-item">
    <div className="goal-label">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="goal-bar">
      <div className="goal-fill" style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="chart-card">
    <h2 className="chart-title">{title}</h2>
    {children}
  </div>
);

export default Dashboard;
