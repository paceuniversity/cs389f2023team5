import { Container } from 'react-bootstrap'; //testing 
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import './Goal.css';

import supabase from '../db/supa';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';





const Goal = (props) => {
  const { session } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(null);
  const appHistory = useHistory();
  
  React.useEffect(() => {
    if (typeof count === 'undefined') {
      setMessage(<div>Value not yet defined</div>);
    } else {
      setMessage(<div>{count}</div>);
    }
  }, [count]);

  const [goal, setGoal] = React.useState('');

    const handleChange = (event) => {
      setGoal(event.target.value);
      
  }
  const goRegimen = () => {
    appHistory.push('/RegimenCalc', count); 
}
const [monday, setMonday] = useState(0);
const [tuesday, setTuesday] = useState(0);
const [wednesday, setWednesday] = useState(0);
const [thursday, setThursday] = useState(0);
const [friday, setFriday] = useState(0);
const [saturday, setSaturday] = useState(0);
const [sunday, setSunday] = useState(0);

const addCountToDatabase = async (data, tableName) => {
  if (!session) {
    setShowAuthModal(true);
    return;
  }

  const { data: insertedData, error } = await supabase
      .from(tableName)
      .insert([data]);
        
  if (error) {
      console.error(`Error adding record to ${tableName} table:`, error);
  } else {
      console.log(`Record added to ${tableName} table:`, insertedData);
  }
};

// const handleGoalSubmit = () => {
//   const goalData = {};

//   if (setMonday.newValue !== 0) {
//     goalData.count = count; 
//   }
//   if (Object.keys(goalData).length > 0) {
//     addCountToDatabase(goalData, 'NewGoalHours');
// }

// };

// const handleGoalSubmit = async () => {
//   const goalData = {
//     Monday: monday,
//     Tuesday: tuesday,
//     Wednesday: wednesday,
//     Thursday: thursday,
//     Friday: friday,
//     Saturday: saturday,
//     Sunday: sunday
//   };

//   // Check if at least one slider value is set
//   if (Object.values(goalData).some(value => value !== 0)) {
//     await addCountToDatabase(goalData, 'NewGoalHours');
//   }
// };
const handleGoalSubmit = async () => {
  const days = [
    { day: 'Monday', hours: monday },
    { day: 'Tuesday', hours: tuesday },
    { day: 'Wednesday', hours: wednesday },
    { day: 'Thursday', hours: thursday },
    { day: 'Friday', hours: friday },
    { day: 'Saturday', hours: saturday },
    { day: 'Sunday', hours: sunday }
  ];
  resetDatabase();
  for (const dayData of days) {
    console.log(`Updating:`, dayData);
    await addOrUpdateDayHours(dayData);
  }
  
};


const resetDatabase = async () => {
  const { error } = await supabase
      .from('Regimen')
      .delete()
      .select()
      .neq('id', -1)

      
  if (error) {
      console.error(`Error Reseting Problem:`, error);
  } else {
      console.log(`Reset Successfully`);
  }
};

const addOrUpdateDayHours = async (dayData) => {
  const { error } = await supabase
    .from('NewGoalHours')
    .upsert(dayData, { onConflict: 'day' } );

  if (error) {
    console.error(`Error updating record for ${dayData.day}:`, error);
  } else {
    console.log(`Record updated for ${dayData.day}`);
  }
  appHistory.push('/regimencalc', count);
}
// const [mondayValue, setMondayValue] = useState(0);
// const [tuesdayValue, setTuesdayValue] = useState(0);
// const [wednesdayValue, setWednesdayValue] = useState(0);
// const [thursdayValue, setThursdayValue] = useState(0);
// const [fridayValue, setFridayValue] = useState(0);
// const [saturdayValue, setSaturdayValue] = useState(0);
// const [sundayValue, setSundayValue] = useState(0);

// const handleSliderChange = (event, value, day) => {
//   switch(day) {
//       case 'Monday':
        
//         setMondayValue(value);
      
//           break;
//       case 'Tuesday':
//           setTuesdayValue(value);
//           break;
//       // ... Repeat for each day of the week
//   }
// }
// const logSliderValues = () => {
//   const dataset = [
//       { day: 'Monday', value: mondayValue },
//       // { day: 'Tuesday', value: tuesdayValue },
//       // ... Repeat for each day of the week
//   ];
  // console.log(dataset);
//   console.log(mondayValue);

// }

const handleMondayChange = (event, newValue) => {
  setMonday(newValue);
  console.log("Monday Hours: ", newValue);
};
const handleTuesdayChange = (event, newValue) => {
  setTuesday(newValue);
  console.log("Tuesday Hours: ", newValue);
};
const handleWednesdayChange = (event, newValue) => {
  setWednesday(newValue);
  console.log("Wednesday Hours: ", newValue);
};
const handleThursdayChange = (event, newValue) => {
  setThursday(newValue);
  console.log("Thursday Hours: ", newValue);
};
const handleFridayChange = (event, newValue) => {
  setFriday(newValue);
  console.log("Friday Hours: ", newValue);
};
const handleSaturdayChange = (event, newValue) => {
  setSaturday(newValue);
  console.log("Saturday Hours: ", newValue);
};
const handleSundayChange = (event, newValue) => {
  setSunday(newValue);
  console.log("Sunday Hours: ", newValue);
};

function valuetext(value) {
  return value;
}

    return (
      <Container className="goal-container">
        <div className="goal-app">
          <h1 className="goal-title">Weekly Schedule Setup</h1>
          <p className="goal-subtitle">Select the number of hours you have available each day to plan your fitness regimen</p>
          
          <div className="day-slider-group">
            <div className="day-slider-item">
              <label className="day-slider-label">
                Monday
                <span className="day-slider-label-secondary">Hours available</span>
              </label>
              <Slider
                aria-label="Hours"
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={.5}
                marks
                min={0}
                max={2.5}
                onChange={handleMondayChange}
              />
            </div>

            <div className="day-slider-item">
              <label className="day-slider-label">
                Tuesday
                <span className="day-slider-label-secondary">Hours available</span>
              </label>
              <Slider
                aria-label="Hours"
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={.5}
                marks
                min={0}
                max={2.5}
                onChange={handleTuesdayChange}
              />
            </div>

            <div className="day-slider-item">
              <label className="day-slider-label">
                Wednesday
                <span className="day-slider-label-secondary">Hours available</span>
              </label>
              <Slider
                aria-label="Hours"
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={.5}
                marks
                min={0}
                max={2.5}
                onChange={handleWednesdayChange}
              />
            </div>

            <div className="day-slider-item">
              <label className="day-slider-label">
                Thursday
                <span className="day-slider-label-secondary">Hours available</span>
              </label>
              <Slider
                aria-label="Hours"
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={.5}
                marks
                min={0}
                max={2.5}
                onChange={handleThursdayChange}
              />
            </div>

            <div className="day-slider-item">
              <label className="day-slider-label">
                Friday
                <span className="day-slider-label-secondary">Hours available</span>
              </label>
              <Slider
                aria-label="Hours"
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={.5}
                marks
                min={0}
                max={2.5}
                onChange={handleFridayChange}
              />
            </div>

            <div className="day-slider-item">
              <label className="day-slider-label">
                Saturday
                <span className="day-slider-label-secondary">Hours available</span>
              </label>
              <Slider
                aria-label="Hours"
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={.5}
                marks
                min={0}
                max={2.5}
                onChange={handleSaturdayChange}
              />
            </div>

            <div className="day-slider-item">
              <label className="day-slider-label">
                Sunday
                <span className="day-slider-label-secondary">Hours available</span>
              </label>
              <Slider
                aria-label="Hours"
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={.5}
                marks
                min={0}
                max={2.5}
                onChange={handleSundayChange}
              />
            </div>
          </div>

          <div className="goal-button-container">
            <Button 
              variant="contained" 
              size="large"
              className="goal-button"
              onClick={handleGoalSubmit}
            >
              Continue to Regimen
            </Button>
          </div>
        </div>
      </Container>
    )
  }

  export default Goal;