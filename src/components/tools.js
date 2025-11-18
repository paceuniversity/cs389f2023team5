import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CalCalc from './CalCalc';
import Goal from './Goal';
import './tools.css';

import Button from '@mui/material/Button';
import RegimenCalc from './RegimenCalc';
//import workoutImage from './images/workout.png';


const tools = () => {
    return (
        <Container className="tools-container">
            <div className="tools-app">
                <h1 className="tools-title">Fitness Tools</h1>
                <p className="tools-subtitle">Access all your fitness tracking and planning tools in one place</p>
                
                <div className="tools-grid">
                    <div className="tools-button-wrapper">
                        <Button 
                            component={Link} 
                            to="/calcalc" 
                            className="tools-button calorie"
                        >
                            <span className="tools-button-icon">🔥</span>
                            Calorie Calculator
                        </Button>
                    </div>

                    <div className="tools-button-wrapper">
                        <Button 
                            component={Link} 
                            to="/goal" 
                            className="tools-button goal"
                        >
                            <span className="tools-button-icon">🎯</span>
                            Goal Setter
                        </Button>
                    </div>

                    <div className="tools-button-wrapper">
                        <Button 
                            component={Link} 
                            to="/log" 
                            className="tools-button log"
                        >
                            <span className="tools-button-icon">📝</span>
                            Log Workout
                        </Button>
                    </div>

                    <div className="tools-button-wrapper">
                        <Button 
                            component={Link} 
                            to="/feedback" 
                            className="tools-button feedback"
                        >
                            <span className="tools-button-icon">💬</span>
                            Send Feedback
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    ); 
}

export default tools;