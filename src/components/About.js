import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function About(props) {
  return (
    <div className="App">
      About for {props.match.params.name}
    </div>
  );
}

export default About;