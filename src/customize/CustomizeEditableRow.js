import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton } from "@mui/material";

const CustomizeEditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a workout"
          name="workoutName"
          value={editFormData.workoutName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter amount of sets"
          name="sets"
          value={editFormData.sets}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter amount of reps"
          name="reps"
          value={editFormData.reps}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <IconButton className="save-icon" type="submit">
        <SaveIcon size='small'>
        </SaveIcon>
        </IconButton>
        <HighlightOffIcon
          className="cancel-icon"
          type="button"
          onClick={handleCancelClick}
        />
      </td>
    </tr>
  );
};

export default CustomizeEditableRow;
