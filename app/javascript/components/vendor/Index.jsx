import React, { useState } from 'react';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ActionCenter from '../ActionCenter';
import LiveMap from '../LiveMap';
import Panel from '../Panel';

const Index = (props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={7} lg={7}>
        <Panel noPadding sx={{ overflow: 'hidden', height: '300px', position: 'relative' }}>
          <Typography
            sx={{
              position: 'absolute',
              left: 15,
              top: 10,
              pr: 10,
              color: 'white',
              backgroundColor: '#0E6E7CAA',
              textShadow: '1px 1px 0 black',
              borderRadius: 5
            }}
            variant="h4">
            Welcome To Your Dashboard!
          </Typography>
          <Typography
            sx={{
              position: 'absolute',
              left: 15,
              bottom: 5,
              color: 'white',
              textShadow: '1px 1px 0 black'
            }}>
            Live Order Map
          </Typography>
          <LiveMap dimensions={{width: 662, height: 300}} speed={10000} frequency={5000}  />
        </Panel>
      </Grid>

      <Grid item xs={12} md={5} lg={5}>
        <Panel title="Action Center" sx={{ height: '300px' }}>
          <ActionCenter items={[
            ['Product(s) Are Due To Ship Today', 2, 'error', '/', LocalShippingOutlinedIcon],
            ['Product(s) Are Low On Stock', 4, 'warning', '/', Inventory2OutlinedIcon]
          ]} />
        </Panel>
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <Panel title='Orders'>
          {/* Table here */}
        </Panel>
      </Grid>
    </Grid>
  );
}

export default Index;
