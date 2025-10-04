import React from 'react';
import './TrainerWorkoutPlans.css';

import chest from '../assets/Chest.png'; 
import triceps from '../assets/Triceps.png';
import back from '../assets/Back.png';
import arms from '../assets/Arms.png';
import shoulders from '../assets/Shoulder.png';
import legs from '../assets/Legs.png';
import recovery from '../assets/REST.png';

const TrainerWorkoutPlans = () => {
  const workouts = [
    { day: 'Monday', title: 'Chest Day', image: chest, exercises: ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes'] },
    { day: 'Tuesday', title: 'Triceps Day', image: triceps, exercises: ['Tricep Dips', 'Skull Crushers', 'Cable Pushdowns'] },
    { day: 'Wednesday', title: 'Back & Lats', image: back, exercises: ['Pull-ups', 'Lat Pulldown', 'Barbell Row'] },
    { day: 'Thursday', title: 'Arms Day', image: arms, exercises: ['Bicep Curls', 'Hammer Curls', 'Preacher Curls'] },
    { day: 'Friday', title: 'Shoulders & Rear Delts', image: shoulders, exercises: ['Overhead Press', 'Lateral Raises', 'Reverse Pec Deck'] },
    { day: 'Saturday', title: 'Thighs & Calves', image: legs, exercises: ['Squats', 'Lunges', 'Calf Raises'] },
    { day: 'Sunday', title: 'Rest & Recovery', image: recovery, exercises: ['Stretching', 'Foam Rolling', 'Yoga'] },
  ];

  return (
    <div className="twk-container-main">
      <h1 className="twk-title-glow">🏋️ Weekly Workout Plans</h1>
      <div className="twk-grid-flexwrap">
        {workouts.map((plan, idx) => (
          <div className="twk-flip-card" key={idx}>
            <div className="twk-flip-card-inner">
              <div className="twk-flip-card-front">
                <img src={plan.image} alt={plan.title} className="twk-front-img" />
                <h3>{plan.day}</h3>
                <p>{plan.title}</p>
              </div>
              <div className="twk-flip-card-back">
                <h4>{plan.title}</h4>
                <ul>
                  {plan.exercises.map((item, i) => (
                    <li key={i}> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerWorkoutPlans;
