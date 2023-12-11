import React, { useState, Fragment, useEffect } from "react";

import { nanoid } from "nanoid";

import supabase from "../db/supa";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from "@mui/material";

const CustomizeTableSaturday = () => {
  const [workouts, setWorkouts] = useState(null);
  const [editWorkoutId, setEditWorkoutId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [addFormData, setAddFormData] = useState({
    workoutName: "",
    sets: "",
    reps: "",
  });

  const [editFormData, setEditFormData] = useState({
    workoutName: "",
    sets: "",
    reps: "",
  });

  const fetchRegimenSunday = async () => {
    const { data: fetchedWorkouts, error } = await supabase
      .from("Regimen")
      .select("name, sets, reps")
      .eq("day", "saturday")
      .order("id", { descending: true });

    if (error) {
      console.error("Error fetching data:", error);
      return;
    }

    if (true) {
      setWorkouts(fetchedWorkouts);
    } else {
      console.log("No data found for Sunday");
    }
  };

  useEffect(() => {
    fetchRegimenSunday();
  }, []);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newWorkout = {
      id: nanoid(),
      workoutName: addFormData.workoutName,
      sets: addFormData.sets,
      reps: addFormData.reps,
    };

    const newWorkouts = [...workouts, newWorkout];
    setWorkouts(newWorkouts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedWorkout = {
      id: editWorkoutId,
      workoutName: editFormData.workoutName,
      sets: editFormData.sets,
      reps: editFormData.reps,
    };

    const newWorkouts = [...workouts];

    const index = workouts.findIndex((workout) => workout.id === editWorkoutId);

    newWorkouts[index] = editedWorkout;

    setWorkouts(newWorkouts);
    setEditWorkoutId(null);
  };

  const handleEditClick = (event, workout) => {
    event.preventDefault();
    setEditWorkoutId(workout.id);

    const formValues = {
      workoutName: workout.workoutName,
      sets: workout.sets,
      reps: workout.reps,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditWorkoutId(null);
  };

  const handleDeleteClick = (workoutId) => {
    const newWorkouts = [...workouts];

    const index = workouts.findIndex((workout) => workout.id === workoutId);

    newWorkouts.splice(index, 1);

    setWorkouts(newWorkouts);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Workouts</TableCell>
            <TableCell align="right">Sets</TableCell>
            <TableCell align="right">Reps</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workouts && workouts.length > 0 ? (
            workouts.map((workout, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="workout">
                  {workout.name}
                </TableCell>
                <TableCell align="right">{workout.sets}</TableCell>
                <TableCell align="right">{workout.reps}</TableCell>
                <TableCell align="right">
                  <EditNoteIcon
                    className="edit-icon"
                    type="button"
                    onClick={(event) => handleEditClick(event, workout)}
                  />
                  <DeleteForeverIcon
                    className="delete-icon"
                    type="button"
                    onClick={() => handleDeleteClick(workout.id)}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>No workouts for Saturday</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizeTableSaturday;