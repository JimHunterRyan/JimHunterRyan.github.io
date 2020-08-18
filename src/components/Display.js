import React from "react";
import { Grid } from "@material-ui/core";
import Skills from "./Skills"
import Profile from "./Profile"

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";



const Display = () => {
  return (
    <Grid container xs={12} spacing={1}>
      <Grid item xs={12} md={6}>
      <Profile/>
      </Grid>
      <Grid item xs={12} md={6}>
        <Skills/>
      </Grid>

    </Grid>
  );
};

export default Display;
