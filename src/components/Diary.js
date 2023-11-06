import React, { useState, useEffect } from 'react';
import supabase from '../db/supa';
import { Container } from 'react-bootstrap';

const Diary = () => {
  const [latestBench, setLatestBench] = useState(null);
  const [latestSquat, setLatestSquat] = useState(null);

  useEffect(() => {
    const fetchLatestBench = async () => {
      const { data: benchPressData, error: benchPressError } = await supabase
        .from('Count')
        .select()
        .order('created_at', { ascending: false }) // Sort by created_at in descending order

        const { data: squatData, error: squatError } = await supabase
        .from('SquatCount')
        .select()
        .order('created_at', { ascending: false });
        if (benchPressError) {
            console.error('Error getting Bench Press records:', benchPressError);
          } else {
            setLatestBench(benchPressData[0]);
          }
    
          if (squatError) {
            console.error('Error getting Squat records:', squatError);
          } else {
            setLatestSquat(squatData[0]);
          }
    }

    fetchLatestBench();
  }, []);

  return (
    <Container>
      <div className="App">
        <h1>Diary</h1>
        <br></br>
        <h2>Bench Press :</h2>
        {latestBench && (
          <div>
            <p>Entry number: {latestBench.id}</p>
            <p>{latestBench.count} (lbs)</p>
            <p>{latestBench.reps} (reps)</p>


            <br></br>
          </div>
        )}
        <h2>Squat :</h2>
        {latestSquat && (
          <div>
            <p>Entry number: {latestSquat.id}</p>
            <p>{latestSquat.count} (lbs)   </p>
            <p>{latestSquat.SquatReps} (reps)   </p>
            
            
            <br></br>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Diary;
