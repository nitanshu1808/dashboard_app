import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Product ID', width: 130 },
  { field: 'name', headerName: 'Product', width: 200 },
  { field: 'product_description', headerName: 'Product Descriptio', width: 200 },
  { field: 'product_price', headerName: 'Product Price', width: 100 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'order_count', headerName: 'Order Count', width: 150 },
  { field: 'created_at', headerName: 'Created At', width: 100 }
];

const ProductsDataTable = (props) => {
  const rows = props.data;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default ProductsDataTable;
