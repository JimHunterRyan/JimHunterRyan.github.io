import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link
        color="inherit"
        href="https://github.com/J1M-RYAN/J1M-RYAN.github.io"
        target="_blank"
      >
        {"Made with " + "\u2764 by "}
        Jim Ryan {new Date().getFullYear()} {"."}
      </Link>
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#ff9f40",
    padding: theme.spacing(6, 0),
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
