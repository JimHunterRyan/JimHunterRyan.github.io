import React from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import { Grid } from "@material-ui/core";
import Projects from "./components/Projects";
import Box from '@material-ui/core/Box';
const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={10} >
          <Box mt={10} mb={4}>
          <Display  />
          </Box>
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
      <Grid item container alignItems="stretch">
      <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={10}>
          <Projects/>
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </Grid>
  );
};

export default App;
