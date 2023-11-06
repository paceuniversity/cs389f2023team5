import React, { useState } from 'react';

import './index.css';

function App() {
  // state
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState('male'); // Default gender
  const [bmr, setBMR] = useState();

  const calcBMR = (event) => {
    // Prevent submitting
    event.preventDefault();

    if (weight === 0 || height === 0 || age === 0) {
      alert('Please enter a valid weight, height, and age');
    } else {
      let s = gender === 'male' ? 5 : -161;
      let bmrValue = 10 * weight + 6.25 * height - 5 * age + s;
      setBMR(bmrValue);
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">Calories Calculator</h2>
        <form onSubmit={calcBMR}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <label>Age</label>
            <input value={age} onChange={(event) => setAge(event.target.value)} />
          </div>
          <div>
            <label>Gender</label>
            <select value={gender} onChange={(event) => setGender(event.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <button className="btn" type="submit">
              Calculate 
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
        </form>

        <div className="center">
          <h3>You need {bmr} kcal/day</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
