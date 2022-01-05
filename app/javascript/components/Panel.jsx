import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Panel = (props) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography component="h2" variant="h6" color="primary">{props.title}</Typography>

      {props.children}
    </Paper>
  );
}

export default Panel;
