import React, { useState, useEffect } from 'react';
import supabase from '../db/supa';
import { Container } from 'react-bootstrap';


const regimenCalc = () => {
    const [latestMonday, setLatestMonday]= useState(null);
    const [latestTuesday, setLatestTuesday]= useState(null);
    const [latestWednesday, setLatestWednesday]= useState(null);
    const [latestThursday, setLatestThursday]= useState(null);
    const [latestFriday, setLatestFriday]= useState(null);
    const [latestSaturday, setLatestSaturday]= useState(null);
    const [latestSunday, setLatestSunday]= useState(null);
    const exercises = ['BenchPress', 'Squat', 'Pullups', 'Situps', 'Curls'];
    const legs = ['squats','rdl','hip thrust','hamstring curls','leg extensions', 'calves']
    const pull = ['pulldown', 'seated row', 'cable row', 'preacher curls', 'hammer curls', 'face pulls']
    const push = ['incline press','flat press','shoulder press', 'lateral raises', 'tricep extensions', 'overhead extensions']
    const full = ['bench', 'squat', 'pulldown', 'hamstring curls', 'shoulder press', 'rdl']
    
    const addToDatabase = async (id, day, wrkoutNme, sets ,reps) => {
        const { error } = await supabase
            .from('Regimen')
            .upsert([{id, day, name: wrkoutNme, sets, reps}]);
              
        if (error) {
            console.error(`Error adding record to Regimen table:`, error);
        } else {
            console.log(`Record added to Regimen table:`, id);
        }
    };

    const creator = () => {
        let i = 0;
        let days = 0; 
        let totalHours = 0;
        let firstDay = 0;
        let secondDay = 0;
        let thirdDay = 0;
        let week = [['monday', latestMonday], ['tuesday', latestTuesday],['wednesday',latestWednesday ], ['thursday',latestThursday ], ['friday',latestFriday], ['saturday', latestSaturday], ['sunday',latestSunday]];
        
        if(latestMonday > 0)
        {
            days++;
            totalHours += latestMonday; 
            firstDay = 1;
        }
        if(latestTuesday > 0)
        {
            days++;
            totalHours += latestTuesday;
            if(firstDay !== 0)
                secondDay = 2;
            else 
                firstDay = 2;
        }
        if(latestWednesday > 0)
        {
            days++;
            totalHours += latestWednesday;
            if(firstDay !== 0)
            {
                if (secondDay !== 0)
                    thirdDay = 3;
                else
                    secondDay = 3;
            }
            else
                firstDay = 3;
        }
        if(latestThursday > 0)
        {
            days++;
            totalHours += latestThursday;
            if(thirdDay === 0)
            {
                if(secondDay === 0)
                {
                    if(firstDay === 0)
                        firstDay = 4;
                }
                else
                    secondDay = 4;
            }
        }
        if(latestFriday > 0)
        {
            days++;
            totalHours += latestFriday;
            if(thirdDay === 0)
            {
                if(secondDay === 0)
                {
                    if(firstDay === 0)
                        firstDay = 5;
                }
                else
                    secondDay = 5;
            }
        }
        if(latestSaturday > 0)
        {
            days++;
            totalHours += latestSaturday;
            if(thirdDay === 0)
            {
                if(secondDay === 0)
                {
                    if(firstDay === 0)
                        firstDay = 6;
                }
                else
                    secondDay = 6;
            }
        }
        if(latestSunday > 0)
        {
            days++;
            totalHours += latestSunday;
            if(thirdDay === 0)
            {
                if(secondDay === 0)
                {
                    if(firstDay === 0)
                        firstDay = 6;
                }
                else
                    secondDay = 6;
            }
        }
        let id = 1;
        if(days >= 3 )
        {
            for(i = 0; i < ((week[firstDay - 1][1]*4)); i++)
            {
                addToDatabase(id, week[firstDay-1][0], push[i], 2, 8)
                id++;
            }
            
            for(i = 0; i < ((week[secondDay - 1][1]*4)); i++)
            {
                addToDatabase(id, week[secondDay-1][0], pull[i], 2, 8)
                id++;
            }
            for(i = 0; i < ((week[thirdDay - 1][1]*4)); i++)
            {
                addToDatabase(id, week[thirdDay-1][0], legs[i], 2, 8)
                id++;
            }
            // PPL
            // for(i = 0; i < ((week[firstDay-1][1])*4); i++)
            // {
            //     // add to supa base ("id" i, "day" week[firstDay-1][0], "name" push[i], "sets" 2, "reps" 8)
                

            // }
            // for(i = 0; i < ((week[secondDay-1][1])*4); i++)
            // {
            //     // add to supa base ("id" i, "day" week[firstDay-1][0], "name" pull[i], "sets" 2, "reps" 8)
            // }
            // for(i = 0; i < ((week[thirdDay-1][1])*4); i++)
            // {
            //     // add to supa base ("id" i, "day" week[firstDay-1][0], "name" legs[i], "sets" 2, "reps" 8)
            // }
            
        }
        if(days === 2)
        {
            for(i = 0; i < ((week[firstDay - 1][1]*4)); i++)
            {
                if(i % 2 === 0 || i === 0)
                {
                    addToDatabase(id, week[firstDay-1][0], push[i], 2, 8)
                    id++;
                // add to supa base (i, week[firstDay-1][0], push[i], 2, 8)
                }
                else
                {
                    addToDatabase(id, week[firstDay-1][0], pull[i], 2, 8)
                    id++;
                }
            }
            
            for(i = 0; i < ((week[secondDay - 1][1]*4)); i++)
            {
                addToDatabase(id, week[secondDay-1][0], legs[i], 2, 8)
                id++;
            }
            // U/L
        //     for(i; i < ((week[firstDay-1][1])*4); i++)
        // {   let secondI = 0;
        //     if(i % 2 === 0)
        //     {
        //         // addToDatabase(i, week[firstDay-1][0], push[i], 2, 8)
        //     // add to supa base (i, week[firstDay-1][0], push[i], 2, 8)
        //     }
        //     else
        //     {
        //         // addToDatabase(i, week[firstDay-1][0], pull[i], 2, 8)
        //     }
        //     // add to supa base ("id" i, "day" week[firstDay-1][0], "name" pull[i], "sets" 2, "reps" 8)

        // }
        
        // for(i; i < ((week[secondDay-1][1])*4) + i; i++)
        // {
        //  // add to supa base ("id" i, "day" week[firstDay-1][0], "name" legs[i], "sets" 2, "reps" 8)
        // //  addToDatabase(i, week[firstDay-1][0], legs[i])

        // }
        }
        if(days === 1)
        {
            for(i = 0; i < ((week[firstDay - 1][1]*4)); i++)
            {
                addToDatabase(id, week[firstDay-1][0], push[i], 2, 8)
                id++;
            }
            // Full Body 
            // addToDatabase(i, week[firstDay-1][0], legs[i])
        }
    };
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
        const { data: wednesdayData, error: wednesdayError } = await supabase
        .from('NewGoalHours')
        .select('hours') // Selects only the 'hours' column
        .eq('id', 3) // Filters rows where 'id' equals 1 (Monday)
        .order('id', { descending: true }) // Orders by 'id' in descending order
        .limit(1); // Limits to 1 entry

        if (wednesdayError) {
            console.error('Error fetching data:', tuesdayError);
        } else {
            if (wednesdayData.length > 0) {
                setLatestWednesday(wednesdayData[0].hours); // Update state with fetched data
            } else {
                console.log('No data found for Wednesday');
            }
        }
        const { data: thursdayData, error: thursdayError } = await supabase
        .from('NewGoalHours')
        .select('hours') // Selects only the 'hours' column
        .eq('id', 4) // Filters rows where 'id' equals 1 (Monday)
        .order('id', { descending: true }) // Orders by 'id' in descending order
        .limit(1); // Limits to 1 entry

        if (thursdayError) {
            console.error('Error fetching data:', tuesdayError);
        } else {
            if (thursdayData.length > 0) {
                setLatestThursday(thursdayData[0].hours); // Update state with fetched data
            } else {
                console.log('No data found for Thursday');
            }
        }
        const { data: fridayData, error: fridayError } = await supabase
        .from('NewGoalHours')
        .select('hours') // Selects only the 'hours' column
        .eq('id', 5) // Filters rows where 'id' equals 1 (Monday)
        .order('id', { descending: true }) // Orders by 'id' in descending order
        .limit(1); // Limits to 1 entry

        if (fridayError) {
            console.error('Error fetching data:', tuesdayError);
        } else {
            if (fridayData.length > 0) {
                setLatestFriday(fridayData[0].hours); // Update state with fetched data
            } else {
                console.log('No data found for Friday');
            }
        }
        const { data: saturdayData, error: saturdayError } = await supabase
        .from('NewGoalHours')
        .select('hours') // Selects only the 'hours' column
        .eq('id', 6) // Filters rows where 'id' equals 1 (Monday)
        .order('id', { descending: true }) // Orders by 'id' in descending order
        .limit(1); // Limits to 1 entry

        if (saturdayError) {
            console.error('Error fetching data:', tuesdayError);
        } else {
            if (saturdayData.length > 0) {
                setLatestSaturday(saturdayData[0].hours); // Update state with fetched data
            } else {
                console.log('No data found for Saturday');
            }
        }
        const { data: sundayData, error: sundayError } = await supabase
        .from('NewGoalHours')
        .select('hours') // Selects only the 'hours' column
        .eq('id', 7) // Filters rows where 'id' equals 1 (Monday)
        .order('id', { descending: true }) // Orders by 'id' in descending order
        .limit(1); // Limits to 1 entry

        if (sundayError) {
            console.error('Error fetching data:', tuesdayError);
        } else {
            if (sundayData.length > 0) {
                setLatestSunday(sundayData[0].hours); // Update state with fetched data
            } else {
                console.log('No data found for Sunday');
            }
        }
            
    };
    useEffect(() => {
        
        
        fetchLatestDay();
        
        creator();
        
    }, [latestMonday, latestTuesday, latestWednesday, latestThursday, latestFriday, latestSaturday, latestSunday]);
    
            
    const mapHoursToExercises = (hours) => {
        const numExercises = hours * 4; // 0.5 hours gets 1 exercise, 1 hour gets 2 exercises, etc.
        return exercises.slice(0, numExercises);
    };

    

    return (
        <Container>
          <div className="App">
            <h1>Hello</h1>
            <br></br>
            <h2>Monday: {latestMonday }</h2>
            <h2>Tuesday: {latestTuesday }</h2> 
            <h2>Wednesday: {latestWednesday }</h2>
            <h2>Thursday: {latestThursday }</h2>
            <h2>Friday: {latestFriday }</h2>
            <h2>Saturday: {latestSaturday }</h2>
            <h2>Sunday: {latestSunday }</h2>
          </div>
        </Container>
    );
    




}
export default regimenCalc;

/* import React, { useState, useEffect } from 'react';
import supabase from '../db/supa';
import { Container } from 'react-bootstrap';

const regimenCalc = () => {
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
        
        // export default regimenCalc; */