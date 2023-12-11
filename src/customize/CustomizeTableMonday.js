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
import Button from "@mui/material/Button";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SaveIcon from "@mui/icons-material/Save";

const CustomizeTableMonday = () => {
  const [workouts, setWorkouts] = useState([]);
  const [editWorkoutId, setEditWorkoutId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    sets: "",
    reps: "",
  });

  useEffect(() => {
    const fetchRegimenMonday = async () => {
      const { data: fetchedWorkouts, error } = await supabase
        .from("Regimen")
        .select("id, name, sets, reps")
        .eq("day", "monday");

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }

      setWorkouts(fetchedWorkouts || []);
    };

    fetchRegimenMonday();
  }, []);

  const addWorkoutToSupabase = async (workout) => {
    try {
      const { error } = await supabase.from("Regimen").insert(workout);
      if (error) {
        console.error("Error adding workout:", error);
      } else {
        console.log(`Workout added: ${JSON.stringify(workout)}`);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const updateWorkoutInSupabase = async (workout) => {
    const { data, error } = await supabase.from("Regimen").upsert([workout]);
    if (error) {
      console.error("Error updating workout:", error);
    } else if (data && data.length > 0) {
      setWorkouts((prevWorkouts) =>
        prevWorkouts.map((w) => (w.id === data[0].id ? data[0] : w))
      );
    }

    //window.location.reload();
  };

  const deleteWorkoutFromSupabase = async (workoutId) => {
    const { error } = await supabase
      .from("Regimen")
      .delete()
      .eq("id", workoutId);
    if (error) {
      console.error("Error deleting workout:", error);
    } else {
      setWorkouts((prevWorkouts) =>
        prevWorkouts.filter((w) => w.id !== workoutId)
      );
    }
  };

  const handleFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setFormData((prevData) => ({ ...prevData, [fieldName]: fieldValue }));
  };

  const handleAddFormSubmit = () => {
    const newWorkout = [
      {
        id: parseInt((Math.random() * 1000), 10),
        day: "monday",
        name: formData.name,
        sets: parseInt(formData.sets, 10),
        reps: parseInt(formData.reps, 10),
      },
    ];

    newWorkout.forEach((workout) => addWorkoutToSupabase(workout));

    setFormData({ name: "", sets: "", reps: "" });
    setShowForm(false);
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedWorkout = {
      id: editWorkoutId,
      name: formData.name,
      sets: formData.sets,
      reps: formData.reps,
    };

    await updateWorkoutInSupabase(editedWorkout);
    setEditWorkoutId(null);
    setFormData({ name: "", sets: "", reps: "" });
  };

  const handleEditClick = (workout) => {
    setEditWorkoutId(workout.id);
    setFormData({ ...workout });
  };

  const handleCancelClick = () => {
    setEditWorkoutId(null);
    setFormData({ name: "", sets: "", reps: "" });
  };

  const handleDeleteClick = (workoutId) => {
    deleteWorkoutFromSupabase(workoutId);
  };

  return (
    <Fragment>
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
              workouts.map((workout) => (
                <TableRow key={workout.id}>
                  <TableCell component="th" scope="row">
                    {editWorkoutId === workout.id ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                      />
                    ) : (
                      workout.name
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {editWorkoutId === workout.id ? (
                      <input
                        type="number"
                        name="sets"
                        value={formData.sets}
                        onChange={handleFormChange}
                      />
                    ) : (
                      workout.sets
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {editWorkoutId === workout.id ? (
                      <input
                        type="number"
                        name="reps"
                        value={formData.reps}
                        onChange={handleFormChange}
                      />
                    ) : (
                      workout.reps
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {editWorkoutId === workout.id ? (
                      <>
                        <SaveIcon
                          variant="contained"
                          size="small"
                          onClick={handleEditFormSubmit}
                        ></SaveIcon>
                        <HighlightOffIcon
                          size="small"
                          onClick={handleCancelClick}
                        ></HighlightOffIcon>
                      </>
                    ) : (
                      <>
                        <EditNoteIcon
                          className="edit-icon"
                          onClick={() => handleEditClick(workout)}
                        />
                        <DeleteForeverIcon
                          className="delete-icon"
                          onClick={() => handleDeleteClick(workout.id)}
                        />
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4}>No workouts for Monday</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {showForm ? (
        <div>
          <input
            type="text"
            required
            placeholder="Enter a workout"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
          />
          <input
            type="number"
            required
            placeholder="Enter amount of sets"
            name="sets"
            value={formData.sets}
            onChange={handleFormChange}
          />
          <input
            type="number"
            required
            placeholder="Enter amount of reps"
            name="reps"
            value={formData.reps}
            onChange={handleFormChange}
          />
          <button type="button" onClick={handleAddFormSubmit}>
            Add
          </button>
          <button type="button" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <Button
          variant="contained"
          size="small"
          onClick={() => setShowForm(true)}
          style={{ marginTop: "10px" }}
        >
          Add new Workout
        </Button>
      )}
    </Fragment>
  );
};

export default CustomizeTableMonday;