import React from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import { Grid } from "@material-ui/core";
import Projects from "./components/Projects";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  projectsTitle: {
    textAlign: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={10}>
          <Box mt={10} mb={4}>
            <Display />
          </Box>
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
      <Grid item>
      <Box  mb={4}>
        <Typography variant="h4" className={classes.projectsTitle}>Projects</Typography>
        </Box>
      </Grid>
      <Grid item container alignItems="stretch">
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={10}>
          <Projects />
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </Grid>
  );
};

export default App;
