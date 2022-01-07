import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const ActionCenter = (props) => {
  const items = props.items.map(([mainText, amount, category, path, Icon]) =>
    <ListItem key={mainText} disablePadding>
      <ListItemButton component={Link} to={path}>
        <ListItemIcon>
          <Icon color={category} />
        </ListItemIcon>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography sx={{ mr: '10px' }} component="span" color={category}>
                {amount}
              </Typography>
              <Typography component="span" color={category}>
                {mainText}
              </Typography>
            </React.Fragment>
          } />
      </ListItemButton>
    </ListItem>
  );

  return (
    <List>
      {items}
    </List>
  );
}

export default ActionCenter;
