import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { IconButton } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";

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

const Profile = ({profileText}) => {
  const classes = useStyles();

  return (
    <Card raised className={classes.fullHeightCard} square>
      <Typography variant="h4" component="h4" align="center">
        Profile
      </Typography>
      <Box px={2}>
      <Typography>
        {profileText}
      </Typography>
      </Box>
      <Grid className={classes.root}>
      <IconButton href="https://github.com/J1M-RYAN" target="_blank">
      <GitHubIcon />
      </IconButton>
      <IconButton href="https://twitter.com/JR98_IRL" target="_blank">
      <TwitterIcon />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/jimryan98/" target="_blank">
      <LinkedInIcon />
      </IconButton>
      </Grid>

    </Card>
  );
};

export default Profile;
