import { Container } from 'react-bootstrap';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Logo from '../images/logo.png';

const Home = (props) => {

    
  return (
    <Container>
      <div className="App"> 
     
     <h1>Welcome to BuffBot</h1>
     <h2>A free online workout and fitness aid</h2>
     
     <img src= {Logo} alt ="Workout Image" />
     </div>
    </Container>
  )
  }

  export default Home;