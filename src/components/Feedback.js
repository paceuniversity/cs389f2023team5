// import { Container } from 'react-bootstrap';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// const Feedback = (_props) => {
//     // State to store the user input
//     const [feedback, setFeedback] = React.useState('');

//     // Function to handle feedback submission
//     const submitFeedback = () => {
//         console.log(feedback);
//     };

//     return (
//         <Container>
//             <div className="App">
//                 <h1>Feedback!</h1>
//                 <h2>Please let us know what you think of the app. Any comments, concerns, or suggestions for things to see in the future.</h2>
//                 <Box
//                     component="form"
//                     sx={{
//                         '& > :not(style)': { m: 1, width: '25ch' },
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <TextField
//                         label="Your Feedback"
//                         multiline
//                         rows={4}
//                         variant="outlined"
//                         value={feedback}
//                         onChange={(e) => setFeedback(e.target.value)}
//                     />
//                     <br />
//                     <button onClick={submitFeedback}>Submit Feedback</button>
//                 </Box>
//             </div>
//         </Container>
//     )
// }

// export default Feedback;
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import supabase from '../db/supa'; // Import your Supabase instance

const Feedback = () => {
    // State to store the user input
    const [feedback, setFeedback] = useState('');

    // Function to add feedback to the database
    const addFeedbackToDatabase = async (message) => {
        const { error } = await supabase
            .from('Comments') // The table name
            .insert([{ Message: message }]); // Inserting the feedback

        if (error) {
            console.error('Error adding feedback to database:', error);
        } else {
            console.log('Feedback added to database');
        }
    };

    // Function to handle feedback submission
    const submitFeedback = () => {
        console.log(feedback); // Log the feedback
        addFeedbackToDatabase(feedback); // Add feedback to database
        setFeedback(''); // Reset the feedback input
    };

    return (
        <Container>
            <div className="App">
                <h1>Feedback!</h1>
                <h2>Please let us know what you think of the app. Any comments, concerns, or suggestions for things to see in the future.</h2>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50vw' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        label="Your Feedback"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                    <br />
                    <Button variant="contained" onClick={submitFeedback}>Submit Feedback</Button>
                </Box>
            </div>
        </Container>
    )
}

export default Feedback;
