import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  skill: {
    margin: "5px",
  },
}));

const Skill = ({ label, backgroundColor, color }) => {
  const classes = useStyles();

  return (
    <Chip
    className={classes.skill}
      label={label}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        borderRadius: 0,
      }}
    />
  );
};

export default Skill;
