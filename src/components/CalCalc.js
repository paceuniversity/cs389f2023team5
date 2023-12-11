import React, { useState } from 'react';
import { Container } from 'react-bootstrap'; //testing 

import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import '../index.css';
import { Menu, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';

function CalCalc() {
  // state
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [sex, setSex] = useState('male'); // Default sex
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [goal, setGoal] = useState('maintain');
  const [bmr, setBMR] = useState();

  const calcBMR = (event) => {
    // Prevent submitting
    event.preventDefault();

    if (weight === 0 || height === 0 || age === 0) {
      alert('Please enter a valid weight, height, and age');
    } else {
      let s = sex === 'male' ? 5 : -161;
      let bmrValue = 10 * weight + 6.25 * height - 5 * age + s;
      // adjust bmr based on activity lvl
      switch (activityLevel) {
        case 'sedentary':
          bmrValue *= 1.2;
          break;
        case 'lightlyActive':
          bmrValue *= 1.375;
          break;
        case 'moderatelyActive':
          bmrValue *= 1.55;
          break;
        case 'veryActive':
          bmrValue *= 1.725;
          break;
        case 'superActive':
          bmrValue *= 1.9;
          break;
        default:
          break;
      }
      switch (activityLevel) {
        case 'fatLoss':
          bmrValue -= 300;
          break;
        case 'maintain':
          break;
        case 'muscleGain':
          bmrValue += 300;
          break;
        default:
          break;
      }
      setBMR(bmrValue);
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <Container>
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
            <label>Sex</label>
            <br></br>
            <FormControl sx={{ m: 0, minWidth: 10 }} size="small">
            <Select value={sex} onChange={(event) => setSex(event.target.value)}>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
            </FormControl>
          </div>
          <div>
            <label>Activity Level</label>
            <br></br>
            <FormControl sx={{ m: 0, minWidth: 80 }} size="small">
            <Select value={activityLevel} onChange={(event) => setActivityLevel(event.target.value)}>
            <MenuItem value="sedentary">Sedentary</MenuItem>
              <MenuItem value="lightlyActive">Lightly Active</MenuItem>
              <MenuItem value="moderatelyActive">Moderately Active</MenuItem>
              <MenuItem value="veryActive">Very Active</MenuItem>
              <MenuItem value="superActive">Super Active</MenuItem>
            </Select>
            </FormControl>
          </div>
          <div>
          <label>Goal</label>
          <br></br>
          <FormControl sx={{ m: 0, minWidth: 80 }} size="small">
            <Select value={goal} onChange={(event) => setGoal(event.target.value)}>
          <MenuItem value={"fatLoss"}>Fat Loss</MenuItem>
          <MenuItem value={"muscleGain"}>Muscle Gain</MenuItem>
          <MenuItem value={"maintain"}>Maintain Weight</MenuItem>
        </Select>
      </FormControl>
      </div>
          <div>
          <br></br>
          <Button variant="contained" size='large' className='Button' onClick={calcBMR}>Calculate</Button>
          &nbsp;
            <Button variant="contained" size='large' onClick={reload} type="submit">
              Reload
            </Button>

          </div>
        </form>

        <div className="center">
          <h3>You need {bmr} kcal/day</h3>
        </div>
      </div>
    </div>
    </Container>
  );
}

export default CalCalc;