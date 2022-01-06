import PropTypes from 'prop-types';
import React, { useState } from 'react';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

import Dashboard from './Dashboard';
import Panel from './Panel';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const VendorPage = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard
        signOutPath={props.signOutPath}
        sidebar={[
          ['Dashboard', <HomeOutlinedIcon />],
          ['Clients', <BusinessOutlinedIcon />],
          ['Vendors', <StorefrontOutlinedIcon />]
        ]}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Panel title="Example Panel">

              </Panel>
            </Grid>
          </Grid>
        </Container>
      </Dashboard>
    </ThemeProvider>
  );
}

VendorPage.propTypes = {
  signOutPath: PropTypes.string.isRequired
};

export default VendorPage;
