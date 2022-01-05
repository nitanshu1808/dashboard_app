import PropTypes from 'prop-types';
import React, { useState } from 'react';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Dashboard from './Dashboard';

const VendorPage = (props) => {
  return (
    <Dashboard
      signOutPath={props.signOutPath}
      sidebar={[
        ['Dashboard', <HomeOutlinedIcon />],
        ['Clients', <BusinessOutlinedIcon />],
        ['Vendors', <StorefrontOutlinedIcon />]
      ]}>

    </Dashboard>
  );
}

VendorPage.propTypes = {
  signOutPath: PropTypes.string.isRequired
};

export default VendorPage;
