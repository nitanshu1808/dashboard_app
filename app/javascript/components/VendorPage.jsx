import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

const Index = (props) => {
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Panel title="Example Panel"></Panel>
    </Grid>
  );
}

const Clients = (props) => {
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Panel title="Clients"></Panel>
    </Grid>
  );
}

const Vendors = (props) => {
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Panel title="Vendors"></Panel>
    </Grid>
  );
}

const VendorPage = (props) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Dashboard
          signOutPath={props.signOutPath}
          sidebar={[
            ['Dashboard', '/vendor/dashboard', HomeOutlinedIcon],
            ['Clients', '/vendor/dashboard/clients', BusinessOutlinedIcon],
            ['Vendors', '/vendor/dashboard/vendors', StorefrontOutlinedIcon]
          ]}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Routes>
                <Route exact path="/vendor/dashboard" element={<Index />} />
                <Route path="/vendor/dashboard/clients" element={<Clients />} />
                <Route path="/vendor/dashboard/vendors" element={ <Vendors /> } />
              </Routes>
            </Grid>
          </Container>
        </Dashboard>
      </ThemeProvider>
    </BrowserRouter>
  );
}

VendorPage.propTypes = {
  signOutPath: PropTypes.string.isRequired
};

export default VendorPage;
