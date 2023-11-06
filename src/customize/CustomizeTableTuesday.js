import React, { useState, Fragment } from "react";

import { nanoid } from "nanoid";

import data from "./data.json";
import CustomizeReadOnlyRow from "./CustomizeReadOnlyRow";
import CustomizeEditableRow from "./CustomizeEditableRow";

let workoutTuesday = data.filter((workout) => workout.day === "tuesday");

const CustomizeTableTuesday = () => {
  const [workouts, setWorkouts] = useState(workoutTuesday);

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

  const [editWorkoutId, setEditWorkoutId] = useState(null);

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

      <h2>Add a Workout</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          required="required"
          placeholder="Enter a workout"
          name="workoutName"
          onChange={handleAddFormChange}
        ></input>
        <input
          type="number"
          required="required"
          placeholder="Enter amount of sets"
          name="sets"
          onChange={handleAddFormChange}
        ></input>
        <input
          type="number"
          required="required"
          placeholder="Enter amount of reps"
          name="reps"
          onChange={handleAddFormChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CustomizeTableTuesday;
