import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Ch_Top20Vendors from '../Ch_Top20Vendors';
import Ch_OrdersVolumeComparison from '../Ch_OrdersVolumeComparison';
import Panel from '../Panel';

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

export default Index;
