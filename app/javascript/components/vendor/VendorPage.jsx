import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Dashboard from '../Dashboard';
import Index from './Index';
import Products from './Products';

let theme = createTheme();
theme = responsiveFontSizes(theme);

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
              <Route exact path="/vendor/dashboard" element={<Index data={props.data} />} />
              <Route path="/vendor/dashboard/products" element={<Products data={props.data} />} />
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
