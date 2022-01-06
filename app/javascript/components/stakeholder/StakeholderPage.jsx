import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Ch_Top20Vendors from '../Ch_Top20Vendors';
import Ch_OrdersVolumeComparison from '../Ch_OrdersVolumeComparison';
import Dashboard from '../Dashboard';
import Panel from '../Panel';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Index = (props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Panel title="Example Panel">

        </Panel>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Panel title='Top 20 Vendors'>
          <Ch_Top20Vendors data={props.data}/>
        </Panel>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Panel title='Orders volume comparison last month'>
          <Ch_OrdersVolumeComparison data={props.data}/>
        </Panel>
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

const StakeholderPage = (props) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Dashboard
          signOutPath={props.signOutPath}
          sidebar={[
            ['Dashboard', '/stakeholder/dashboard', HomeOutlinedIcon],
            ['Products', '/stakeholder/dashboard/products', CreateOutlinedIcon]
          ]}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route exact path="/stakeholder/dashboard" element={<Index data={props.data} />} />
              <Route path="/stakeholder/dashboard/products" element={<Products />} />
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
