import React, { useState } from 'react';
import '../App.css';
import '../index.css';
import './Log.css';
import supabase from '../db/supa';
import { Container} from 'react-bootstrap';
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const Log = (props) => {
    const { session } = useAuth();
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [count, setCount] = useState(0);
    const [reps, setReps] = useState(0);
    const [squatCount, setSquatCount] = useState(0); //this will be my attempt at creating a new text box containing a new supabase table 
    const [SquatReps, setSquatReps] = useState(0);

    const appHistory = useHistory();
    // let numberTest = 0;
    let benchPressInput;
    let squatInput;

    const addCountToDatabase = async (data, tableName) => {
        if (!session) {
            setShowAuthModal(true);
            return;
        }

        const { data: insertedData, error } = await supabase
            .from(tableName)
            .insert([data]);
              
        if (error) {
            console.error(`Error adding record to ${tableName} table:`, error);
        } else {
            console.log(`Record added to ${tableName} table:`, insertedData);
        }
    };
    
    const handleBenchPressInputChange = (e) => {
        const value = e.target.value;
        setCount(value);
    };

    const handleSquatInputChange = (e) => {
        const value = e.target.value;
        setSquatCount(value);
    };
    const handleRepsInputChange = (e) => {
        const value = e.target.value;
        setReps(value);
    };
    const handleSqRepsInputChange = (e) => {
        const value = e.target.value;
        setSquatReps(value);
    };


    const handleSubmit = () => {
        const countData = {};
        const squatCountData = {};
    
        if (count !== 0) {
            countData.count = count;
        }
        
        if (reps !== 0) {
            countData.reps = reps;
        }
    
        if (Object.keys(countData).length > 0) {
            addCountToDatabase(countData, 'Count');
        }
    
        if (squatCount !== 0) {
            squatCountData.count = squatCount;
        }
    
        if (SquatReps !== 0) {
            squatCountData.SquatReps = SquatReps;
        }
    
        if (Object.keys(squatCountData).length > 0) {
            addCountToDatabase(squatCountData, 'SquatCount');
        }
    
        appHistory.push('/diary');
    };
    return (
        <>
            <Container className="log-container">
                <div className="log-app">
                    <h1 className="log-title">Log Your Workout</h1>
                    <p className="log-subtitle">Track your exercises and reps to monitor your progress</p>
                    
                    <div className="log-input-group">
                        <div className="log-input-field">
                            <label className="log-input-label">
                                Bench Press
                                <span className="log-input-label-hint"> (weight or reps)</span>
                            </label>
                            <input 
                                type="text" 
                                className="log-input"
                                placeholder="Enter bench press weight"
                                value={count} 
                                onChange={handleBenchPressInputChange}
                            />
                        </div>

                        <div className="log-input-field">
                            <label className="log-input-label">
                                Bench Press Reps
                                <span className="log-input-label-hint"> (number of repetitions)</span>
                            </label>
                            <input 
                                type="text" 
                                className="log-input"
                                placeholder="Enter number of reps"
                                value={reps} 
                                onChange={handleRepsInputChange}
                            />
                        </div>

                        <div className="log-input-field">
                            <label className="log-input-label">
                                Squat
                                <span className="log-input-label-hint"> (weight or reps)</span>
                            </label>
                            <input 
                                type="text" 
                                className="log-input"
                                placeholder="Enter squat weight"
                                value={squatCount} 
                                onChange={handleSquatInputChange}
                            />
                        </div>

                        <div className="log-input-field">
                            <label className="log-input-label">
                                Squat Reps
                                <span className="log-input-label-hint"> (number of repetitions)</span>
                            </label>
                            <input 
                                type="text" 
                                className="log-input"
                                placeholder="Enter number of reps"
                                value={SquatReps} 
                                onChange={handleSqRepsInputChange}
                            />
                        </div>
                    </div>

                    <div className="log-button-container">
                        <Button 
                            variant="contained" 
                            size="large"
                            className="log-button"
                            onClick={handleSubmit}
                        >
                            Save & Continue
                        </Button>
                    </div>
                </div>
            </Container>
            <AuthModal
                open={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                title="Sign in to log your workouts"
            />
        </>
    );
}

export default Log;




//private commit
//help