import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Switch } from "@material-ui/core/";

import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& input": {
      marginTop: 10,
    },
  },
}));

const Form = () => {
  const classes = useStyles();
  const [largeInfoMode, setLargeInfoMode] = React.useState(false);
  const methods = useForm();
  const { handleSubmit, register, errors } = methods;
  const onSubmit = (data) => console.log(data);
  const handleChange = () => {
    setLargeInfoMode(!largeInfoMode);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <input
        name="username"
        placeholder="username"
        ref={register({ required: true })}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        ref={register({ required: true })}
      />
      <div>
        Add secret question
        <Switch
          checked={largeInfoMode}
          onChange={handleChange}
          name="largeInfoMode"
        />
      </div>
      {largeInfoMode ? (
        <input
          name="secret"
          placeholder="Enter your first car model"
          ref={register({ required: largeInfoMode })}
        />
      ) : null}
      {errors.username && <span>This field is required</span>}
      {errors.password && <span>This field is required</span>}
      <input type="submit" value="Submit" />
    </form>
  );
};
export default Form;
