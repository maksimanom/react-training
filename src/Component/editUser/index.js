import React from "react";
import { TextField, Button } from "@material-ui/core";

export const EditUserWindow = ({
  user,
  handleEditUserData,
  handleChangeUserDataClick,
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
      <TextField
        name="working"
        fullWidth
        onChange={(e) => handleEditUserData(e.target.name, e.target.value)}
      />
      <Button
        variant="contained"
        type="submit"
        onClick={() => handleChangeUserDataClick()}
      >
        Submit
      </Button>
    </div>
  );
};
