import { Container } from 'react-bootstrap';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Home = (props) => {

    const count = props.location.state;
    let message;
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
    return (
      <Container>
        <h3>Home is here</h3>
        <div>Counter value is: { }
          {message}<br></br><br></br>
          <TextField id="outlined-basic" label="Monday" variant="outlined" /><br></br><br></br>
          <TextField id="outlined-basic" label="Tuesday" variant="outlined" /><br></br><br></br>
          <TextField id="outlined-basic" label="Wednesday" variant="outlined" /><br></br><br></br>
          <TextField id="outlined-basic" label="Thrusday" variant="outlined" /><br></br><br></br>
          <TextField id="outlined-basic" label="Friday" variant="outlined" /><br></br><br></br>
          <TextField id="outlined-basic" label="Saturday" variant="outlined" /><br></br><br></br>
          <TextField id="outlined-basic" label="Sunday" variant="outlined" />

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
        
        {console.log(props.location.state)}
      </Container>
    )
  }

  export default Home;