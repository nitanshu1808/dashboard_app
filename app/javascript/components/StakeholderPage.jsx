import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Dashboard from './Dashboard';
import Panel from './Panel';

const StakeholderPage = (props) => {
  return (
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
        </Grid>
      </Container>
    </Dashboard>
  );
}

StakeholderPage.propTypes = {
  signOutPath: PropTypes.string.isRequired
};

export default StakeholderPage;
