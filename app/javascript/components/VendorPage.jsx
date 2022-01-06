import PropTypes from 'prop-types';
import React, { useState } from 'react';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Dashboard from './Dashboard';
import Panel from './Panel';

const VendorPage = (props) => {
  return (
    <Dashboard
      signOutPath={props.signOutPath}
      sidebar={[
        ['Dashboard', <HomeOutlinedIcon />],
        ['Clients', <BusinessOutlinedIcon />],
        ['Vendors', <StorefrontOutlinedIcon />]
      ]}>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Panel title="Example Panel">

            </Panel>
          </Grid>
        </Grid>
      </Container>
    </Dashboard>
  );
}

VendorPage.propTypes = {
  signOutPath: PropTypes.string.isRequired
};

export default VendorPage;
