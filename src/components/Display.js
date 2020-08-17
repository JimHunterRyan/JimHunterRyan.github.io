import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Display = () => {
  return (
    <Container >
    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
      Hello my name is Jim,
      This sections is coming soon :P
    </Typography>
  </Container>
  );
};

export default Display;
