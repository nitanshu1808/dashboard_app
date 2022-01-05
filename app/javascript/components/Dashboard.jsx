import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Dashboard = (props) => {
  return (
    <div id="dashboard">
      <div id="sidebar">
        <form action={props.signOutPath} method="POST">
          <input type="hidden" name="_method" value="delete"/>
          <Button type="submit">Sign Out</Button>
        </form>
      </div>
      <div id="content"></div>
    </div>
  );
}

Dashboard.propTypes = {
  userType: PropTypes.string.isRequired,
  signOutPath: PropTypes.string.isRequired
};

export default Dashboard;
