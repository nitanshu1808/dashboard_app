import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Panel = (props) => {
  let title;
  if (props.title) {
    title = <Typography component="h2" variant="h6" color="primary">{props.title}</Typography>
  } else {
    title = <React.Fragment></React.Fragment>
  }

  return (
    <Paper sx={{ p: props.noPadding ? 0 : 2, ...props.sx }}>
      {title}

      {props.children}
    </Paper>
  );
}

export default Panel;
