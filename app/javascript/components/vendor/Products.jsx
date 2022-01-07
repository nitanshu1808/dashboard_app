import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Panel from '../Panel';
import ProductsDataTable from '../../DataTables/ProductsDataTable';

const Products = (props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Panel title="Products">
          <ProductsDataTable
            data={props.data}
          />
        </Panel>
      </Grid>
    </Grid>
  );
}

export default Products;
