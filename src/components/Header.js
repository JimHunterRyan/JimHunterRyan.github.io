import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  intials: {
    flexGrow: 1,
    color: "black",
  },
  title: {
    flexGrow: .927,
    color: "black",
    alignSelf: "center",
  },

}));

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.intials}>
          JR
        </Typography>
        <Typography variant="h5" className={classes.title}>
        {matches?"Jim Ryan | Portfolio":""}
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          href="https://dtv9a8pr50g2p.cloudfront.net/jimryancv.pdf"
          target="_blank"
          style={{ borderRadius: 0 }}
        >
          Resume
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
