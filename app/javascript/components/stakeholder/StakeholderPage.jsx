import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Dashboard from '../Dashboard';
import Index from './Index';
import Clients from './Clients';
import Vendors from './Vendors';
import VendorProfile from './VendorProfile';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const StakeholderPage = (props) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Dashboard
          signOutPath={props.signOutPath}
          sidebar={[
            ['Dashboard', '/stakeholder/dashboard', HomeOutlinedIcon],
            ['Clients', '/stakeholder/dashboard/clients', BusinessOutlinedIcon],
            ['Vendors', '/stakeholder/dashboard/vendors', StorefrontOutlinedIcon],
          ]}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route exact path="/stakeholder/dashboard" element={<Index data={props.data} />} />
              <Route path="/stakeholder/dashboard/clients" element={<Clients />} />
              <Route path="/stakeholder/dashboard/vendors" element={<Vendors vendors={props.vendors}/>} />
              <Route path="/stakeholder/dashboard/vendors/:vendorId/profile" element={<VendorProfile />} />
            </Routes>
          </Container>
        </Dashboard>
      </ThemeProvider>
    </BrowserRouter>
  );
}

StakeholderPage.propTypes = {
  signOutPath: PropTypes.string.isRequired
};

export default StakeholderPage;
