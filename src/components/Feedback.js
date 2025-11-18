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
import './Feedback.css';
import supabase from '../db/supa';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const Feedback = () => {
    const { session } = useAuth();
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [feedback, setFeedback] = useState('');

    const addFeedbackToDatabase = async (message) => {
        if (!session) {
            setShowAuthModal(true);
            return;
        }

        const { error } = await supabase
            .from('Comments')
            .insert([{ Message: message }]);

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
        <Container className="feedback-container">
            <div className="feedback-app">
                <h1 className="feedback-title">Send Us Your Feedback</h1>
                <p className="feedback-subtitle">
                    We'd love to hear from you! Please share your thoughts, comments, concerns, or suggestions to help us improve BuffBot.
                </p>
                
                <div className="feedback-form">
                    <div className="feedback-textarea-group">
                        <label className="feedback-label">Your Message</label>
                        <textarea
                            className="feedback-textarea"
                            placeholder="Tell us what you think about the app..."
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        />
                        <span className="feedback-char-count">{feedback.length} characters</span>
                    </div>

                    <div className="feedback-button-container">
                        <Button 
                            variant="contained"
                            className="feedback-button"
                            onClick={submitFeedback}
                            disabled={feedback.trim().length === 0}
                        >
                            Submit Feedback
                        </Button>
                    </div>
                </div>
            </div>
            
            <AuthModal
                open={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                title="Sign in to submit feedback"
            />
        </Container>
    )
}

export default Feedback;
