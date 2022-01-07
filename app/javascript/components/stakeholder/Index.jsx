import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ProductionQuantityLimitsOutlinedIcon
  from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Ch_OrdersByStatus from '../Ch_OrdersByStatus';
import Ch_Top20Vendors from '../Ch_Top20Vendors';
import Ch_OrdersVolumeComparison from '../Ch_OrdersVolumeComparison';
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
            Live Send Map
          </Typography>
          <LiveMap dimensions={{width: 662, height: 300}} speed={1000} frequency={500} />
        </Panel>
      </Grid>

      <Grid item xs={12} md={5} lg={5}>
        <Panel title="Action Center" sx={{ height: '300px' }}>
          <ActionCenter items={[
            ['Order(s) Failed On Payment', 5, 'error', '/', ProductionQuantityLimitsOutlinedIcon],
            ['Client(s) Have Unspent Funds', 3, 'warning', '/', PeopleAltOutlinedIcon]
          ]} />
        </Panel>
      </Grid>

      <Grid item xs={12} md={12} lg={6}>
        <Panel title='All Orders By Status'>
          <Ch_OrdersByStatus data={props.data}/>
        </Panel>
      </Grid>

      <Grid item xs={12} md={12} lg={6}>
        <Panel title='Top 20 Vendors'>
          <Ch_Top20Vendors data={props.data}/>
        </Panel>
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <Panel title='Orders Volume Comparison ( Last Month )'>
          <Ch_OrdersVolumeComparison data={props.data}/>
        </Panel>
      </Grid>
    </Grid>
  );
}

export default Index;
