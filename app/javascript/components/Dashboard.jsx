import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import SendosoLogo from './sendoso-logo.png';

const Dashboard = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    formRef.current.submit();
  }
  const formRef = React.createRef();

  const sidebarItems = props.sidebar.map(([name, path, Icon]) =>
    <ListItem className="item" key={name} disablePadding>
      <ListItemButton className="button" component={Link} to={path}>
        <ListItemIcon className="icon">
          <Icon />
        </ListItemIcon>
        <ListItemText className="name" primary={name}/>
      </ListItemButton>
    </ListItem>
  );

  return (
    <div id="dashboard">
      <div id="sidebar">
        <div id="sidebar-header">
          <img id="sendoso-logo" src={SendosoLogo}/>

          <div id="sidebar-header-name"><Typography variant="h6">User Name</Typography></div>

          <div id="sidebar-header-icons">
            <Tooltip title="Settings">
              <IconButton>
                <SettingsOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Logout">
              <form action={props.signOutPath} method="POST" ref={formRef}>
                <input type="hidden" name="authenticity_token" value={props.token} />
                <input type="hidden" name="_method" value="delete"/>
                <IconButton type="submit" onClick={handleClick}>
                  <LogoutOutlinedIcon />
                </IconButton>
              </form>
            </Tooltip>
          </div>
        </div>

        <Divider />

        <List>
          {sidebarItems}
        </List>
      </div>
      <div id="content">{props.children}</div>
    </div>
  );
}

Dashboard.propTypes = {
  signOutPath: PropTypes.string.isRequired
};

export default Dashboard;
