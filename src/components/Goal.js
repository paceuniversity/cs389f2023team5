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

import supabase from '../db/supa';





const Goal = (props) => {

    let message;
    const [count, setCount] = useState(0);
    const appHistory = useHistory();
    // undefined when not defined and when definied and not initialized
    if (typeof count === 'undefined') {
      message = <div>Value not yet defined</div>
    } else {
      message = <div>{count}</div>
    }
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
      <Container>
        <div className='app'>
        <div className='container'>
        <h3>Select Number of Hours Free per Day Below</h3><br></br>
          {/* <TextField id="outlined-basic" label="Monday" variant="outlined" /><br></br><br></br>
          <TextField id="outlined-basic" label="Tuesday" variant="outlined" /><br></br><br></br>
          <TextField id="outlined-basic" label="Wednesday" variant="outlined" /><br></br><br></br>
          <TextField id="outlined-basic" label="Thrusday" variant="outlined" /><br></br><br></br>
          <TextField id="outlined-basic" label="Friday" variant="outlined" /><br></br><br></br>
          <TextField id="outlined-basic" label="Saturday" variant="outlined" /><br></br><br></br>
          <TextField id="outlined-basic" label="Sunday" variant="outlined" /><br></br><br></br> */}
          <Typography id="input-slider" gutterBottom>
            Monday
          </Typography>
          <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Hours"
            defaultValue={0}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={.5}
            marks
            min={0}
            max={2.5}
            // onChange={(e, value) => handleSliderChange(e, value, 'Monday')}
            onChange={handleMondayChange}

          /></Box>
          <Typography id="input-slider" gutterBottom>
          Tuesday
        </Typography>
        <Box sx={{ width: 300 }}>
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
        /></Box>
        <Typography id="input-slider" gutterBottom>
            Wednesday
          </Typography>
          <Box sx={{ width: 300 }}>
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
          /></Box>
          <Typography id="input-slider" gutterBottom>
            Thursday
          </Typography>
          <Box sx={{ width: 300 }}>
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
             
          /></Box>
          <Typography id="input-slider" gutterBottom>
            Friday
          </Typography>
          <Box sx={{ width: 300 }}>
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
          /></Box>
          <Typography id="input-slider" gutterBottom>
            Saturday
          </Typography>
          <Box sx={{ width: 300 }}>
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
          /></Box>
          <Typography id="input-slider" gutterBottom>
            Sunday
          </Typography>
          <Box sx={{ width: 300 }}>
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
            /></Box>

          
            <Button variant="contained" size = "large" onClick = {handleGoalSubmit} >Next</Button>
            {/* onClick={handleGoalSubmit} */}
          <br></br><br></br>
        </div>
        </div>
        
        {console.log(props.location.state)}
        
      </Container>
    )
  }

  export default Goal;