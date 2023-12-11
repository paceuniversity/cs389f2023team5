import React, { useState, useEffect } from 'react';
import supabase from '../db/supa';
import { Container } from 'react-bootstrap';


const RegimentCalc = () => {
    const [latestMonday, setLatestMonday]= useState(null);
    const [latestTuesday, setLatestTuesday]= useState(null);
    const [latestWednesday, setLatestWednesday]= useState(null);
    const [latestThurday, setLatestThursday]= useState(null);
    const [latestFriday, setLatestFirstday]= useState(null);
    const [latestSaturday, setLatestSaturday]= useState(null);
    const [latestSunday, setLatestSunday]= useState(null);

    useEffect(() => {
        const fetchLatestDay = async () => {
            const { data: mondayData, error: mondayError } = await supabase
                .from('NewGoalHours')
                .select('hours') // Selects only the 'hours' column
                .eq('id', 1) // Filters rows where 'id' equals 1 (Monday)
                .order('id', { descending: true }) // Orders by 'id' in descending order
                .limit(1); // Limits to 1 entry
        
            if (mondayError) {
                console.error('Error fetching data:', mondayError);
            } else {
                if (mondayData.length > 0) {
                    setLatestMonday(mondayData[0].hours); // Update state with fetched data
                } else {
                    console.log('No data found for Monday');
                }
            }
            const { data: tuesdayData, error: tuesdayError } = await supabase
            .from('NewGoalHours')
            .select('hours') // Selects only the 'hours' column
            .eq('id', 2) // Filters rows where 'id' equals 1 (Monday)
            .order('id', { descending: true }) // Orders by 'id' in descending order
            .limit(1); // Limits to 1 entry
    
        if (tuesdayError) {
            console.error('Error fetching data:', tuesdayError);
        } else {
            if (tuesdayData.length > 0) {
                setLatestTuesday(tuesdayData[0].hours); // Update state with fetched data
            } else {
                console.log('No data found for Tuesday');
            }
        }
        };
        
    
        fetchLatestDay();
    }, []);
    

    return (
        <Container>
          <div className="App">
            <h1>Hello</h1>
            <br></br>
            <h2>Monday: {latestMonday }</h2>
            <h2>Tuesday: {latestTuesday }</h2>
          </div>
        </Container>
    );
    




}
export default RegimentCalc;

/* import React, { useState, useEffect } from 'react';
import supabase from '../db/supa';
import { Container } from 'react-bootstrap';

const RegimentCalc = () => {
    const [latestMonday, setLatestMonday]= useState(null);
    const [latestTuesday, setLatestTuesday]= useState(null);
    // ... other state declarations

    const exercises = ['BenchPress', 'Squat', 'Pullups', 'Situps', 'Curls'];

    const mapHoursToExercises = (hours) => {
        const numExercises = hours * 2; // 0.5 hours gets 1 exercise, 1 hour gets 2 exercises, etc.
        return exercises.slice(0, numExercises);
    };

    useEffect(() => {
        // ... your existing fetchLatestDay function
    }, []);

    const mondayExercises = mapHoursToExercises(latestMonday);
    const tuesdayExercises = mapHoursToExercises(latestTuesday);
    // ... similarly for other days

    return (
        <Container>
            <div className="App">
                <h1>WOAH</h1>
                <br></br>
                <h2>Monday: {latestMonday}</h2>
                <ul>
                    {mondayExercises.map((exercise, index) => <li key={index}>{exercise}</li>)}
                </ul>
                <h2>Tuesday: {latestTuesday}</h2>
                <ul>
                    {tuesdayExercises.map((exercise, index) => <li key={index}>{exercise}</li>)}
                </ul>
                /* similarly for other days */
        //         </div>
        //         </Container>
        //     );
        // };
        
        // export default RegimentCalc; */