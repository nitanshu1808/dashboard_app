import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Dashboard from '../Dashboard';
import Panel from '../Panel';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Index = (props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Panel title="Example Panel"></Panel>
      </Grid>
    </Grid>
  );
}

const Products = (props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Panel title="Products"></Panel>
      </Grid>
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
            ['Products', '/vendor/dashboard/products', CreateOutlinedIcon]
          ]}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route exact path="/vendor/dashboard" element={<Index />} />
              <Route path="/vendor/dashboard/products" element={<Products />} />
            </Routes>
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
