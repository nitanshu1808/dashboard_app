import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Ch_Top20Vendors from './Ch_Top20Vendors';
import Ch_OrdersVolumeComparison from './Ch_OrdersVolumeComparison';
import Dashboard from './Dashboard';
import Panel from './Panel';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const StakeholderPage = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard
        signOutPath={props.signOutPath}
        sidebar={[
          ['Dashboard', <HomeOutlinedIcon />],
          ['Products', <CreateOutlinedIcon />]
        ]}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
        </Container>
      </Dashboard>
    </ThemeProvider>
  );
}

StakeholderPage.propTypes = {
  signOutPath: PropTypes.string.isRequired
};

export default StakeholderPage;
