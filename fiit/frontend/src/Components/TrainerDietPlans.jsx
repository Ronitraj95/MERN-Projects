import React from 'react';
import './styles.css'; 

import cutting from '../assets/Cutting.png';
import bulking from '../assets/Bulking.png';
import maintenance from '../assets/Maintenance.png';
import keto from '../assets/keto.png';
import vegan from '../assets/vegan.png';
import fasting from '../assets/fasting.png';

const TrainerDietPlans = () => {
  const dietPlans = [
    { id: 1, image: cutting, desc: 'Low calorie, high protein diet focusing on lean meats, green vegetables, and minimal carbs.' },
    { id: 2, image: bulking, desc: 'High calorie intake with complex carbs, proteins, and healthy fats to support muscle growth.' },
    { id: 3, image: maintenance, desc: 'Balanced macros to maintain current physique with moderate activity.' },
    { id: 4, image: keto, desc: 'Very low carb, high fat diet designed to put the body into ketosis.' },
    { id: 5, image: vegan, desc: 'Plant-based protein sources like lentils, tofu, and chickpeas to build muscle.' },
    { id: 6, image: fasting, desc: 'Time-restricted eating windows combined with healthy meal prep.' }
  ];

  return (
    <div className="tdp-page-container">
      <h1 className="tdp-heading-gradient">🥗 Diet Plans</h1>
      <div className="tdp-grid-display">
        {dietPlans.map(plan => (
          <div key={plan.id} className="tdp-flip-card-wrapper">
            <div className="tdp-card-inner-wrap">
              <div className="tdp-front-view">
                <img src={plan.image} alt="diet" className="tdp-card-image" />
              </div>
              <div className="tdp-back-view">
                <p className="tdp-card-description">{plan.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerDietPlans;
