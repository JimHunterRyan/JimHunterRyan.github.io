import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";

import skillsList from "../skillsList";
import Skill from "./Skill";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  }, fullHeightCard: {
    height: "100%",
  },
}));
const Skills = () => {
  const classes = useStyles();
  const getSkills = (skillObject) => {
    return (
      <Grid item>
        <Skill {...skillObject} />
      </Grid>
    );
  };

  return (
    <Card raised className={classes.fullHeightCard} square>
      <Typography variant="h4" component="h4" align="center">
        Skills
      </Typography>
      <Box px={2}>
        <Grid container spacing={1} className={classes.root}>
          {skillsList.map((s) => getSkills(s))}
        </Grid>
      </Box>
    </Card>
  );
};

export default Skills;
