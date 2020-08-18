import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  fullHeightCard: {
    height: "100%",
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <Paper  square className={classes.fullHeightCard}>
      <Typography variant="h4" component="h4" align="center">
        Profile
      </Typography>
      <Box px={2}>
      <Typography>
        Hey there! I am a 2nd year Computer Systems student at the University of Limerick. I love web technologies! Currently I am learning the MERN stack.
      </Typography>
      </Box>
    </Paper>
  );
};

export default Profile;
