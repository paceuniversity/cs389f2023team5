import React, { useState, Fragment } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import data from "./mock-data.json";
import CustomizeReadOnlyRow from "./CustomizeReadOnlyRow";
import CustomizeEditableRow from "./CustomizeEditableRow";

const CustomizeTable = () => {
  const [workouts, setWorkouts] = useState(data);

  const [editFormData, setEditFormData] = useState({
    workoutName: "",
    sets: "",
    reps: "",
  });

  const [editWorkoutId, setEditWorkoutId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
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
    <div className="customize-table">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Workout</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout) => (
              <Fragment>
                {editWorkoutId === workout.id ? (
                  <CustomizeEditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <CustomizeReadOnlyRow
                    workout={workout}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>

    /* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Workout(s)</TableCell>
            <TableCell align='right'>Sets</TableCell>
            <TableCell align='right'>Reps</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exampleData.map((data) => (
            <TableRow
              key={data.workoutName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.workoutName}
              </TableCell>
              <TableCell align='right'>{data.sets}</TableCell>
              <TableCell align='right'>{data.reps}</TableCell>
              <TableCell align='right'><EditNoteIcon /></TableCell>
              <TableCell align='right'><DeleteForeverIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */
  );
};

export default CustomizeTable;
