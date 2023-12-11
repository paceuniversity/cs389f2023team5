import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CalCalc from './CalCalc';
import Goal from './Goal';

import Button from '@mui/material/Button';
import RegimenCalc from './RegimenCalc';
//import workoutImage from './images/workout.png';


const tools = () => {
    return (
        <Container>
        <div className='app'>
        <div className='container'>
            <h1>Tools</h1>
            <br></br>
        <Button component={Link} to="/calcalc" variant="contained" size = "large">Calorie Calculator</Button>
        <br></br><br></br>
        <Button component={Link} to="/goal" variant="contained" size = "large">Goal Setter</Button>
        <br></br><br></br>
        <Button component={Link} to="/log" variant="contained" size = "large">Log</Button>
        <br></br><br></br>
        <Button component={Link} to="/feedback" variant="contained" size = "large">Feedback</Button>
      </div>
      </div>
      </Container>
    ); 
}

export default tools;