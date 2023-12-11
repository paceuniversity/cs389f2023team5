import React from "react";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";

const CustomizeReadOnlyRow = ({
  workout,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <tr>
      <td>{workout.name}</td>
      <td>{workout.sets}</td>
      <td>{workout.reps}</td>
      <td>
        <EditNoteIcon
          className="edit-icon"
          type="button"
          onClick={(event) => handleEditClick(event, workout)}
        />
        <DeleteForeverIcon
          className="delete-icon"
          type="button"
          onClick={() => handleDeleteClick(workout.id)}
        ></DeleteForeverIcon>
      </td>
    </tr>
  );
};

export default CustomizeReadOnlyRow;
