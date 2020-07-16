import React from "react";
import { TextField, Button, Checkbox } from "@material-ui/core";

export const EditUserWindow = ({
  user,
  handleEditUserData,
  handleClickChangeUserData,
}) => {
  return (
    <div className="edit-user-window">
      <TextField
        name="name"
        defaultValue={user.name}
        fullWidth
        onChange={(e) => handleEditUserData(e.target.name, e.target.value)}
      />
      <TextField
        name="surname"
        defaultValue={user.surname}
        fullWidth
        onChange={(e) => handleEditUserData(e.target.name, e.target.value)}
      />
      <TextField
        name="age"
        type="number"
        defaultValue={user.age}
        fullWidth
        onChange={(e) => handleEditUserData(e.target.name, e.target.value)}
      />
      <div>
        Working
        <Checkbox
          defaultChecked={user.working}
          name="working"
          onClick={(e) => handleEditUserData(e.target.name, e.target.checked)}
        />
      </div>
      <Button
        variant="contained"
        type="submit"
        onClick={() => handleClickChangeUserData(user.id)}
      >
        Submit
      </Button>
    </div>
  );
};
