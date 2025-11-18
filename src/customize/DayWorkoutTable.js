import React, { useState, Fragment, useEffect } from "react";
import supabase from "../db/supa";
import { useAuth } from "../context/AuthContext";
import AuthModal from "../components/AuthModal";
import './DayWorkoutTable.css';
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

const DayWorkoutTable = ({ day }) => {
  const { session } = useAuth();
  const [workouts, setWorkouts] = useState([]);
  const [editWorkoutId, setEditWorkoutId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    sets: "",
    reps: "",
  });

  useEffect(() => {
    const fetchRegimen = async () => {
      const { data: fetchedWorkouts, error } = await supabase
        .from("Regimen")
        .select("id, name, sets, reps")
        .eq("day", day.toLowerCase());

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }

      setWorkouts(fetchedWorkouts || []);
    };

    fetchRegimen();
  }, [day]);

  const addWorkoutToSupabase = async (workout) => {
    try {
      const { error } = await supabase.from("Regimen").insert(workout);
      if (error) {
        console.error("Error adding workout:", error);
      } else {
        console.log(`Workout added: ${JSON.stringify(workout)}`);
        // Refetch to get the inserted data with proper ID
        const { data: newWorkout } = await supabase
          .from("Regimen")
          .select("id, name, sets, reps")
          .eq("day", day.toLowerCase())
          .order("id", { ascending: false })
          .limit(1);
        
        if (newWorkout && newWorkout.length > 0) {
          setWorkouts((prev) => [newWorkout[0], ...prev]);
        }
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
    if (!session) {
      setShowAuthModal(true);
      return;
    }

    if (!formData.name.trim() || !formData.sets || !formData.reps) {
      alert("Please fill in all fields");
      return;
    }

    const newWorkout = {
      day: day.toLowerCase(),
      name: formData.name,
      sets: parseInt(formData.sets, 10),
      reps: parseInt(formData.reps, 10),
    };

    addWorkoutToSupabase(newWorkout);
    setFormData({ name: "", sets: "", reps: "" });
    setShowForm(false);
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    if (!session) {
      setShowAuthModal(true);
      return;
    }

    if (!formData.name.trim() || !formData.sets || !formData.reps) {
      alert("Please fill in all fields");
      return;
    }

    const editedWorkout = {
      id: editWorkoutId,
      name: formData.name,
      sets: parseInt(formData.sets, 10),
      reps: parseInt(formData.reps, 10),
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
    if (!session) {
      setShowAuthModal(true);
      return;
    }

    if (window.confirm("Are you sure you want to delete this workout?")) {
      deleteWorkoutFromSupabase(workoutId);
    }
  };

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="workout table">
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
                          onClick={handleEditFormSubmit}
                          sx={{ cursor: "pointer", mr: 1 }}
                          aria-label="save"
                        />
                        <HighlightOffIcon
                          onClick={handleCancelClick}
                          sx={{ cursor: "pointer" }}
                          aria-label="cancel"
                        />
                      </>
                    ) : (
                      <>
                        <EditNoteIcon
                          className="edit-icon"
                          onClick={() => handleEditClick(workout)}
                          sx={{ cursor: "pointer", mr: 1 }}
                          aria-label="edit"
                        />
                        <DeleteForeverIcon
                          className="delete-icon"
                          onClick={() => handleDeleteClick(workout.id)}
                          sx={{ cursor: "pointer" }}
                          aria-label="delete"
                        />
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4}>No workouts for {day}</TableCell>
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

      <AuthModal
        open={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        title="Sign in to manage workouts"
      />
    </Fragment>
  );
};

export default DayWorkoutTable;
