import React, { useState } from 'react';
import '../App.css';
import supabase from '../db/supa';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Log = (props) => {
    const [count, setCount] = useState(0);
    const [reps, setReps] = useState(0);
    const [squatCount, setSquatCount] = useState(0); //this will be my attempt at creating a new text box containing a new supabase table 
    const [SquatReps, setSquatReps] = useState(0);

    const appHistory = useHistory();
    // let numberTest = 0;
    let benchPressInput;
    let squatInput;

    const addCountToDatabase = async (data, tableName) => {
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
    
        appHistory.push('/');
    };
    return (
        <Container>
            <div className="App">
                Track Your Progress!
            </div>
            <div>
                <p>Bench Press</p>
                <input type="text" value={count} onChange={handleBenchPressInputChange}></input>
                {/* <input type="text" value={reps} onChange={}></input> */}
                <br></br>
                <p>Squat</p>
                <input type="text" value={squatCount} onChange={handleSquatInputChange}></input>
                <br></br>
                <p>Reps</p>
                <input type="text" value={reps} onChange={handleRepsInputChange}></input>
                <br></br>
                <p>SqReps</p>
                <input type="text" value={SquatReps} onChange={handleSqRepsInputChange}></input>
                <br></br>
                <Button onClick={handleSubmit}>Enter</Button>
            </div>
            <br></br>
        </Container>
    );
}

export default Log;




//private commit
//help