import { Container } from 'react-bootstrap';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Faq = (_props) => {
    return (
        <Container>
            <div className="App">
                <h1>Frequently asked questions</h1>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}> 
                    <div style={{ flex: 1, marginRight: '10px' }}>
                        <h2>q1--Choosing weight</h2>
                        <p style={{ fontSize: '14px' }}>To choose the right weight for an exercise, start with a weight that allows you to perform the exercise with proper form but still presents a challenge in the last few repetitions.</p>
                    </div>
                    <div style={{ flex: 1, marginLeft: '10px' }}>
                        <h2>q3--Importance of Rest and Recovery</h2>
                        <p style={{ fontSize: '14px' }}>Adequate rest and recovery are crucial for muscle growth and overall fitness. Allow at least 48 hours of rest for each muscle group after a workout and consider incorporating active recovery days into your routine.</p>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1, marginRight: '10px' }}>
                        <h2>q2--Choosing food to lose weight</h2>
                        <p style={{ fontSize: '14px' }}>To lose weight effectively, focus on a balanced diet with a variety of nutrient-dense foods, including fruits, vegetables, whole grains, and lean proteins.</p>
                    </div>
                    <div style={{ flex: 1, marginLeft: '10px' }}>
                        <h2>q4--Hydration during workouts</h2>
                        <p style={{ fontSize: '14px' }}>Staying hydrated is key for effective workouts. Drink water before, during, and after exercise to maintain optimal performance and recovery.</p>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default Faq;