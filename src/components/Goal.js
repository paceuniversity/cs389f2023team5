import { Container } from 'react-bootstrap';
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
  const goHome = () => {
    appHistory.push('/', count); 
}
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
          /></Box>

          
          <Button variant="contained" size = "large" onClick={goHome}>Next</Button>
          <br></br><br></br>

          <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Goal</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={goal}
          onChange={handleChange}
          autoWidth
          label="Goal"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"fatLoss"}>Fat Loss</MenuItem>
          <MenuItem value={"muscleGain"}>Muscle Gain</MenuItem>
          <MenuItem value={"maintain"}>Maintain Weight</MenuItem>
        </Select>
      </FormControl>
        </div>
        </div>
        
        {console.log(props.location.state)}
      </Container>
    )
  }

  export default Goal;